import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function main() {
    const csvPath = path.resolve(process.cwd(), 'prodotti_box.csv')
    const csvData = fs.readFileSync(csvPath, 'utf8')

    const lines = csvData.split('\n').slice(1) // Skip header

    console.log('🌱 Inizio seeding prodotti...')

    for (const line of lines) {
        if (!line.trim()) continue

        const [id, name, category, costStr, stockStr, note] = line.split(',')
        const cost = parseFloat(costStr)
        const stock = parseInt(stockStr)

        // Logica prezzi: Socio +10%, Guest +30%
        const priceSocio = cost * 1.10
        const priceGuest = cost * 1.30

        await prisma.product.upsert({
            where: { sku: `SKU-${id}` }, // Uso l'ID come SKU per unicità
            update: {
                name,
                category,
                costPrice: cost,
                priceSocio,
                priceGuest,
                stock,
                description: note
            },
            create: {
                sku: `SKU-${id}`,
                name,
                category,
                costPrice: cost,
                priceSocio,
                priceGuest,
                stock,
                description: note
            }
        })
        console.log(`✅ Prodotto inserito: ${name}`)
    }

    console.log('🚀 Seeding completato!')

    // Creazione Admin di test
    const bcrypt = await import('bcryptjs')
    const hashedPassword = await bcrypt.default.hash('admin123', 10)

    await prisma.user.upsert({
        where: { email: 'admin@thebox.it' },
        update: {},
        create: {
            email: 'admin@thebox.it',
            name: 'Admin Box',
            password: hashedPassword,
            role: 'ADMIN'
        }
    })
    console.log('👑 Admin creato: admin@thebox.it / admin123')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
