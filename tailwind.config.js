/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        dimon: {
          dark: '#0A2463',
          mid: '#0077B6',
          light: '#00B4D8',
          bright: '#00D9FF',
          soft: '#90E0EF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
