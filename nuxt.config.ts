export default defineNuxtConfig({
  ssr: true, // 開啟伺服器端渲染
  css: [
    '~/assets/css/main.css',
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "animate.css/animate.min.css",
  ],
  typescript: {
    typeCheck: true,
  },
  build: {
    transpile: ["vuetify"],
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
      googleClientId: "",
    },
  },
  modules: [
    [
      "unplugin-icons/nuxt",
      {},
    ],
    '@nuxtjs/tailwindcss',
  ],
  plugins: [
    '~/plugins/google-analytics.client.ts', // GA 插件
    '~/plugins/google-tag-manager.client.ts', // GTM 插件
   // { src: '~/plugins/sitemap-and-robots.ts', mode: 'server' }, // sitemap 和 robots 插件
  ],
  app: {
    head: {
      title: "陳酒家釀 - 南投百年老店",
      meta: [
        {
          name: "description",
          content: "陳酒家釀，南投百年老店，提供高品質的歷史建築、傳統技藝、美食老店文化介紹。",
        },
        {
          name: "keywords",
          content: "陳酒家釀, 南投百年老店, 歷史建築, 傳統技藝, 美食老店",
        },
        {
          name: "author",
          content: "陳酒家釀",
        },
      ],
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
