// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr:true,
  css: ['~/assets/css/main.css',"vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css","animate.css/animate.min.css"],
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
      "unplugin-icons/nuxt",
      {
        /* options */
      }
    ]
  ]
});
