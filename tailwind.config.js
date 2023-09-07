/** @type {import('tailwindcss').Config} */
import roboto from './assets/roboto'
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
        Oswald: ['oswald', 'sans-serif']
    },
    backgroundImage: {
      'contactBG': "url('./assets/contactBG.jpg')",
  },
},
  
  plugins: [],
}
}
