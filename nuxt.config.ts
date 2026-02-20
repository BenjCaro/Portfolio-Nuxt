export default defineNuxtConfig({
  // Active les outils de dev Nuxt dans le navigateur
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  // Modules installés
  modules: ['@nuxt/ui', '@pinia/nuxt'],

  // Typage strict pour apprendre les bonnes pratiques TS
  typescript: {
    strict: true,
    typeCheck: false,
    shim: false
  },

  // Configuration du futur déploiement (SSR par défaut)
  routeRules: {
    '/admin/**': { ssr: false } // Exemple : l'admin peut être en SPA pure
  },
  compatibilityDate: '2026-02-20',

})