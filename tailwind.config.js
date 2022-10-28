/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // add inter font
      fontFamily: {
        sans:["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
