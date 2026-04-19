// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        cream: '#FDF6EC',
        dark: '#1A1208',
        brown: '#3D2B0E',
        green: '#2D5016',
        'green-light': '#4A7C28',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        gold: '0 8px 30px rgba(201,168,76,0.3)',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}