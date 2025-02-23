/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          800: '#1e3a8a',
          900: '#0f172a',
        }
      }
    },
  },
  plugins: [],
};