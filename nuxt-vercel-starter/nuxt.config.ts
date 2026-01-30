export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    authOrigin: process.env.NUXT_AUTH_ORIGIN || process.env.AUTH_ORIGIN || ''
  },

  auth: {
    originEnvKey: 'NUXT_AUTH_ORIGIN',
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: false
  }
})