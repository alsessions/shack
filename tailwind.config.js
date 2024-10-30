/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: [ 'sans-serif'],
      display: ['DynaPuff', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
