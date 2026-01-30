export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  css: ['~/assets/css/main.css'],
  auth: {
    baseURL: process.env.AUTH_ORIGIN ? `${process.env.AUTH_ORIGIN}/api/auth` : '/api/auth',
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: false
  }
})