/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { brand: { 50: '#fff7ed', 600: '#ea580c', 700: '#c2410c' } },
      fontFamily: { display: ['"Bricolage Grotesque"', 'sans-serif'], sans: ['"DM Sans"', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
