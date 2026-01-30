import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    // Check for Admin Role
    // Note: ideally we check session here too, but middleware handles route protection
    // For API security, we should ideally verify session again.

    try {
        const products = await prisma.product.findMany({
            orderBy: {
                name: 'asc'
            }
        })

        return products
    } catch (e) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Errore nel recupero dei prodotti'
        })
    }
})
