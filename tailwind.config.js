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
      },
      screens: {
        'xs': '475px',
        // => @medai (mid-width: 475px) { ... }
        'sm': '576px',

        'msm': '840px',
        // => @media (min-width: 576px) { ... }
        'md': '960px',
        // => @media (min-width: 960px) { ... }
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
        'tablet': '640px',
        'laptop': '1040px',
        'desktop': '1024px',
      },
    },
  },
  plugins: [],
}
