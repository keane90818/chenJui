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
    '~/plugins/google-analytics.client.ts', // 新增的插件路徑
  ],
  app: {
    head: {
      script: [
        {
          hid: 'google-tag',
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-V3VTFF8PLS',
        },
        {
          hid: 'google-analytics',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V3VTFF8PLS');
          `,
          type: 'text/javascript',
        },
      ],
      __dangerouslyDisableSanitizers: ['script'], // 使用正確的屬性
    },
  },
});
