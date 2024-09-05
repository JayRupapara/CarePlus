/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FC4D4D",
        secondary : "#040774",
        background : "#F6F6F6",
      },
      boxShadow: {
        'red': '#FC4D4D 0px 7px 29px -10px',
        'blue':'#040774 0px 7px 29px -10px'
      }
    },
  },
  plugins: [],
}