import { defineConfig } from "prisma/config"
import dotenv from 'dotenv'
import path from 'path'

// Explicitly load .env from CWD
dotenv.config({ path: path.join(process.cwd(), '.env') })

const url = process.env.DIRECT_URL || process.env.DATABASE_URL || ''

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: url,
  },
})
