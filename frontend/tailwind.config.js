/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        callas: {
          red: '#D32F2F',       // Primary Help/Emergency Color
          blue: '#1976D2',      // Brand Action/Navigation Color
          darkBlue: '#0D47A1',  // Deep Layout/Footer Color
          lightBlue: '#E3F2FD', // Section Background Fill
          neutralDark: '#212121',
          neutralLight: '#F5F5F5'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}