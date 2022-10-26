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
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '.5': '.5px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
}
