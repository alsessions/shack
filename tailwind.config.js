/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
