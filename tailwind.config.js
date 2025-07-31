/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5CACEB',
        secondary: '#0d243e', // A darker blue for text and accents
        light: '#FFFFFF',
        accent: '#facc15', // A warm yellow/gold accent
        background: '#f0f8ff', // A very light blue, almost white
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(92, 172, 235, 0.5), 0 0 20px rgba(92, 172, 235, 0.3)',
      },
    },
  },
  plugins: [],
};
