import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const key = 'GUEST-TEST-2024'

    const record = await prisma.guestKey.upsert({
        where: { key },
        update: { isActive: true },
        create: {
            key,
            isActive: true,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) // 7 days
        }
    })

    console.log(`🔑 Chiave ospite creata: ${record.key}`)
    console.log('✅ Puoi usarla per il login!')
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
