// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // exposed to client & server
    public: {
      SERVER_1_URL: process.env.SERVER_1_URL,
      SERVER_2_URL: process.env.SERVER_2_URL,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxt/eslint'],
})
