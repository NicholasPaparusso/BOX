export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  css: ['~/assets/css/main.css'],
  auth: {
    origin: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs'
    }
  }
})