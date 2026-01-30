export default defineEventHandler(async () => {
    const dbUrl = process.env.DATABASE_URL
    const directUrl = process.env.DIRECT_URL

    console.log('DATABASE_URL present:', !!dbUrl)
    console.log('DIRECT_URL present:', !!directUrl)

    return {
        DATABASE_URL_PRESENT: !!dbUrl,
        DATABASE_URL_START: dbUrl ? dbUrl.substring(0, 30) + '...' : 'NOT SET',
        DIRECT_URL_PRESENT: !!directUrl,
    }
})
