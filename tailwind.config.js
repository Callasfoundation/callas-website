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
          red: '#D32F2F',       
          redDark: '#B71C1C',   
          blue: '#1A237E',      
          blueLight: '#283593', 
          gold: '#F59E0B',      
          gray: '#F3F4F6',      
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], 
        heading: ['Poppins', 'system-ui', 'sans-serif'], 
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}