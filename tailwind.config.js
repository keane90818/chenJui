/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {
    colors: {
      myColor: "#857a70"
    },
    extend: {}
  },
  plugins: [require("flowbite/plugin")]
};
