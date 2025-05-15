// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  experimental: { appManifest: false },
  app: {
    baseURL: '/netphim/',
    head: {
      title: 'Nuxt', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },

        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Monoton&family=Open+Sans:ital,wght@0,400;1,300&family=Playfair+Display:wght@400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&family=Shizuru&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css',
        },
      ],
      script: [
        {
          type: 'module',
          src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
        },
        { src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js' },
      ],
    },
  },

  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/grid.css',
    '~/assets/css/component.css',
    '~/assets/css/style.css',
  ],
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

  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vue-macros/nuxt',
  ],
})
