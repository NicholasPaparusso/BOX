export default defineEventHandler(async () => {
    try {
        const dbUrl = process.env.DATABASE_URL
        console.log('DB URL present:', !!dbUrl)

        if (!dbUrl) {
            return { ok: false, error: 'DATABASE_URL is not set!' }
        }

        const { PrismaClient } = await import('@prisma/client')
        const prisma = new PrismaClient({
            datasources: {
                db: {
                    url: dbUrl
                }
            }
        })

        await prisma.$connect()
        await prisma.$disconnect()
        return { ok: true, message: 'Prisma works with explicit datasource!' }
    } catch (e: any) {
        console.error('Prisma Error:', e)
        return { ok: false, error: e.message }
    }
})
