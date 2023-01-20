/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pblue': '#bbd0ff',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}