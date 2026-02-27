/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,md,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Condensed"', 'sans-serif'],
      },
      backgroundImage: {
        'stone-pattern': "url('/img/stone.png')",
        'metal-pattern': "url('/img/metal.png')",
      }
    },
  },
  plugins: [],
}
