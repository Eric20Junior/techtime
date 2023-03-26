/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xs': '375px',
      'xm': '412px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
