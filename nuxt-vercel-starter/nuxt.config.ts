export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  css: ['~/assets/css/main.css'],

  // Disable SSR for auth routes to prevent recursion on Vercel
  routeRules: {
    '/api/auth/**': { ssr: false }
  },

  auth: {
    baseURL: 'https://box-psi-liard.vercel.app',
    // Disable server-side auth to prevent the recursion loop
    disableServerSideAuth: true,
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: false
  }
})