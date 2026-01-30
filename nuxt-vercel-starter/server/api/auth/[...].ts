import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import prisma from '~/server/utils/prisma'
import bcrypt from 'bcryptjs'

export default NuxtAuthHandler({
    secret: process.env.AUTH_SECRET,
    providers: [
        // @ts-ignore
        CredentialsProvider.default({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
                guestKey: { label: 'Guest Key', type: 'text' }
            },
            async authorize(credentials: any) {
                // --- GUEST LOGIN STRATEGY ---
                if (credentials?.guestKey) {
                    const keyRecord = await prisma.guestKey.findUnique({
                        where: { key: credentials.guestKey }
                    })

                    if (!keyRecord || !keyRecord.isActive) {
                        throw new Error('Codice ospite non valido o scaduto')
                    }

                    if (keyRecord.expiresAt && keyRecord.expiresAt < new Date()) {
                        throw new Error('Codice ospite scaduto')
                    }

                    // Return a "Virtual" Guest User
                    // We don't necessarily need to create it in the DB if we handle it in JWT
                    // But for consistency with Prisma relationships (Orders), let's create an ephemeral Guest User
                    // or reuse a static Guest account.
                    // BETTER STRATEGY: Create a user for this session to track history? 
                    // OR: Assign to a generic "Guest User".

                    // Let's create/update a user specific to this Key ID to allow tracking
                    const guestEmail = `guest_${keyRecord.key}@thebox.it`

                    const guestUser = await prisma.user.upsert({
                        where: { email: guestEmail },
                        update: { lastLoginWithKey: new Date() }, // Add this field if needed or just update basic fields
                        create: {
                            email: guestEmail,
                            name: 'Ospite',
                            password: '', // No password
                            role: 'GUEST'
                        }
                    })

                    return {
                        id: guestUser.id,
                        name: guestUser.name,
                        email: guestUser.email,
                        role: 'GUEST'
                    }
                }

                // --- STANDARD LOGIN STRATEGY ---
                if (!credentials?.email || !credentials?.password) return null

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                })

                if (!user) return null

                // Guest users created via keys won't have a password set, so we must ensure password exists before comparing
                if (!user.password) return null

                const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

                if (!isPasswordValid) return null

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.id = user.id
                // @ts-ignore
                token.role = user.role
            }
            return token
        },
        session: ({ session, token }) => {
            if (token && session.user) {
                // @ts-ignore
                session.user.id = token.id
                // @ts-ignore
                session.user.role = token.role
            }
            return session
        }
    },
    pages: {
        signIn: '/login'
    }
})
