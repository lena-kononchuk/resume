// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    '@/assets/styles/global.css',
  ],
  target: 'static',
  router: {
    base: '/resume/', 
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      title: 'Resume',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }, 
        { name: 'description', content: 'This is a cv application on Nuxt.js' }, 
        { name: 'keywords', content: 'Nuxt, Vue, Tailwind, Bootstrap' }, 
        { name: 'author', content: 'Your name or company' }, 
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Test Nuxt App' }, 
        { property: 'og:description', content: 'This is a test application on Nuxt.js' }, 
        { property: 'og:type', content: 'website' },        
      ],
    }
  },
})
