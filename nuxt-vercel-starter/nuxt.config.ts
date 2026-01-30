export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  css: ['~/assets/css/main.css'],

  // Runtime config - Nuxt reads NUXT_ prefixed env vars automatically
  runtimeConfig: {
    public: {
      authOrigin: process.env.AUTH_ORIGIN || 'https://box-psi-liard.vercel.app'
    }
  },

  auth: {
    // Hardcode the baseURL for production since env vars are not working
    baseURL: process.env.AUTH_ORIGIN || 'https://box-psi-liard.vercel.app/api/auth',
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: false
  }
})