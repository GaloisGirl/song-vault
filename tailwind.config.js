/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,md,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stone-pattern': "url('/img/stone.png')",
        'metal-pattern': "url('/img/metal.png')",
      }
    },
  },
  plugins: [],
}
