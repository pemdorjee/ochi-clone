

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ibm: ["IBM Plex Mono", "sans-serif"],
        bebas: [ "Bebas Neue", "sans-serif"],
        nanum: ["Nanum Gothic", "sans-serif"]


      }
    },
  },
  plugins: [],
}