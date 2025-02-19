/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}

