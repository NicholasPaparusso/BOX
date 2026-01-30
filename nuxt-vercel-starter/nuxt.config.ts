export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  css: ['~/assets/css/main.css'],

  // Ensure auth API routes are handled correctly
  routeRules: {
    '/api/auth/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    }
  },

  auth: {
    baseURL: 'https://box-psi-liard.vercel.app',
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: false
  }
})