/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#090a33',
        midnight: '#100a4f',
        violetDeep: '#22106f',
        orangeHot: '#ff7a2f',
        orangeSoft: '#ffb66d',
        mintFresh: '#3ee0bf',
        paper: '#fbfbff'
      },
      boxShadow: {
        glow: '0 18px 45px rgba(21, 12, 92, 0.18)',
        soft: '0 12px 32px rgba(20, 18, 63, 0.1)',
        nav: '0 -10px 30px rgba(7, 8, 47, 0.16)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
