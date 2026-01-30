import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { id, stock, costPrice } = body

    if (!id) {
        throw createError({ statusCode: 400, statusMessage: 'ID prodotto mancante' })
    }

    // Calculate prices logic
    // Guest = Cost + 30%
    // Socio = Cost + 10%
    let updateData: any = {}

    if (stock !== undefined) updateData.stock = stock

    if (costPrice !== undefined) {
        const cost = Number(costPrice)
        updateData.costPrice = cost
        updateData.priceGuest = parseFloat((cost * 1.30).toFixed(2))
        updateData.priceSocio = parseFloat((cost * 1.10).toFixed(2))
    }

    try {
        const product = await prisma.product.update({
            where: { id },
            data: updateData
        })

        return product
    } catch (e) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Errore nell\'aggiornamento del prodotto'
        })
    }
})
