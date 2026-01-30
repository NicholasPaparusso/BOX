export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  css: ['~/assets/css/main.css'],

  auth: {
    // Use origin only (without /api/auth - nuxt-auth adds it automatically)
    baseURL: 'https://box-psi-liard.vercel.app',
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: false
  }
})