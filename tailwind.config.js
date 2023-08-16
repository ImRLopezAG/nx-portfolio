const { nextui } = require('@nextui-org/react')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,md,mdx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Gotham SSm A, sans-serif']
    },
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui()]
}
