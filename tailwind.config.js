/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        pizarra: "URL('/public/assets/image/background_pizarron.jpg')",
      },
    },
  },
  plugins: [],
};
