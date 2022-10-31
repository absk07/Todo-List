/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sblue: "#6a5acd",
        edit: "#FFFF00",
        delete: "#FF0000"
      }
    },
  },
  plugins: [],
}