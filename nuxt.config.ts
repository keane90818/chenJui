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
  ],
  app: {
    head: {
      title: "陳酒家釀 | 歷史與人文的交織，南投的百年韻味",
      meta: [
        {
          name: "description",
          content: "陳酒家釀，帶您探索南投的百年文化與歷史，感受傳統技藝與美食的獨特魅力，體驗時間沉澱的悠久韻味。",
        },
        {
          name: "keywords",
          content: "陳酒家釀, 南投百年文化, 南投傳統技藝, 歷史與人文, 美食文化",
        },
        {
          name: "author",
          content: "陳酒家釀",
        },
        { property: "og:title", content: "陳酒家釀 | 歷史與人文的交織，南投的百年韻味" },
        { property: "og:description", content: "探索陳酒家釀，深入感受南投的百年文化與歷史，體驗傳統技藝與美食的魅力。" },
        { property: "og:image", content: "https://chen-jui.vercel.app//logo.png" },
        { property: "og:url", content: "https://chen-jui.vercel.app/" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "陳酒家釀 | 歷史與人文的交織，南投的百年韻味" },
        { name: "twitter:description", content: "探索陳酒家釀，深入感受南投的百年文化與歷史，體驗傳統技藝與美食的魅力。" },
        { name: "twitter:image", content: "https://你的網站/logo.png" },
      ],
      link: [
        { rel: "canonical", href: "https://chen-jui.vercel.app/" }
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
