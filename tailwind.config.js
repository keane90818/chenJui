/** @type {import('tailwindcss').Config} */
export const prefix = "tw-";
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./app.vue",
  "./node_modules/flowbite.{js,ts}"
];
export const theme = {
  colors: {
    myColor: "#857a70",
    titleGreen: " #94ad54"
  },
  extend: {}
};
export const plugins = [require("flowbite/plugin")];
