export default defineNuxtConfig({
  ssr: true,
  css: [
    '~/assets/css/main.css',
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "animate.css/animate.min.css"
  ],
  typescript: {
    typeCheck: true
  },
  build: {
    transpile: ["vuetify"]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: "https://parkalert.onrender.com",
      prodUrl: "https://park-alert-website.vercel.app",
      googleClientId: ""
    }
  },
  modules: [
    [
      "unplugin-icons/nuxt", {}
    ],
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    '~/plugins/google-analytics.client.ts', // 引用插件
  ],
  app: {
    head: {
      script: [
        {
          hid: 'google-tag',
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-V3VTFF8PLS',
        },
      ],
    },
  },
});
