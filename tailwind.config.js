/** @type {import('tailwindcss').Config} */
import roboto from './assets/roboto'
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '720px',
      // => @media (min-width: 640px) { ... } 
  
      'md': '1024px',
      // => @media (min-width: 768px) { ... }
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['poppins', 'sans-serif']
    },
  },
  
  plugins: [],
}
}
