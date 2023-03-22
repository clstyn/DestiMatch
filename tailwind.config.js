/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'fold': '280px'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      fontSize: {
        '2xs': '9px'
      },
      colors: {
        "textwhite": "#F6F6F6",
        "textblack": "#272D2F",
        "orange": "#FF7143",
        "pink1": "#FD3163",
        "pink2": "#EF2E5F",
        "blue": "#0D92EB"
      }
    },
  },
  plugins: [],
}