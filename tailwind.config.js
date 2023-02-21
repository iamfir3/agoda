/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#5392f9",
        black: "#2a2a2e",
        grey: "#4b4f56",
        grey2: "#cfd0d2",
        grey3:'#737373',
        red: "#e12d2d",
        lightRed: "#ff567d",
        darkRed: "#b42424",
        lightOrange: "#fdeee6",
        superLightGrey: "#dddfe2",
        background1: "#EAEBEF",
        background2:'#f9f9f9',
        background3:'#f8f7f9',
        background4:'#e9ebee',
        background5:'#2a2a2e',
        lightGrey: "#d7d6da",
        lightBlue: "#87b3fb",
        lightBlue2:'#dde9fd',
        darkGrey:'#38435a',
        pink:'#ff567d',
        yellow:'#ffa726'
      },
      backgroundColor: {
        primary: "#5392f9",
        red: "#e12d2d",
        grey: "#4b4f56",
        grey3:'#737373',
        lightRed: "#ff567d",
        grey2: "#cfd0d2",
        darkRed: "#b42424",
        lightOrange: "#fdeee6",
        superLightGrey: "#dddfe2",
        background1: "#EAEBEF",
        background2:'#f9f9f9',
        background3:'#f8f7f9',
        background4:'#e9ebee',
        background5:'#2a2a2e',
        lightGrey: "#d7d6da",
        lightBlue: "#87b3fb",
        lightBlue2:'#dde9fd',
        darkGrey:'#38435a',
        pink:'#ff567d',
        yellow:'#ffa726'
      },
      keyframes: {
        showSearch: {
          "0%": {
            transform: "translateY(-20%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(-5%)",
            opacity: "1",
          },
        },
      },
      animation: {
        showSearch: "showSearch .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
