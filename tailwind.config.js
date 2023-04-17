/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        pizarra: "URL('/public/assets/image/background_pizarron.jpg')",
      },
      backgroundColor: {
        sienna: '#A0522D',
      },
    },
    fontFamily: {
      PT_Sans: ['PT Sans', 'ui-sans-serif'],
    },
  },
  plugins: [],
};
