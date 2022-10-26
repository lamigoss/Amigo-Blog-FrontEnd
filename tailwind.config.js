/** @type {import('tailwindcss').Config} */


module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d9488",
        secondary: "#0284c7"
      },
    },
  },
  plugins: [],
}
