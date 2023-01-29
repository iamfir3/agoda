/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      'colors':{
        'primary':'#5392f9',
        'black':'#2a2a2e',
        'grey':'#4b4f56',
        'red':'#e12d2d',
        'lightRed':'#ff567d',
        'darkRed':'#b42424',
        'lightOrange':'#fdeee6',
        'superLightGrey':'#dddfe2',
      },
      'backgroundColor': {
        'primary':'#5392f9',
        'red':'#e12d2d',
        'grey':'#4b4f56',
        'lightRed':'#ff567d',
        'darkRed':'#b42424',
        'lightOrange':'#fdeee6',
        'superLightGrey':'#dddfe2',
      },
      'keyframes':{
        'showSearch':{
          '0%':{
            transform:'translateY(-20%)',
            opacity:'0'
          },
          '100%':{
            transform:'translateY(-5%)',
            opacity:'1'
          }
        }
      },
      'animation': {
        'showSearch':'showSearch .5s ease-in-out'
      }
    },
  },
  plugins: [],
}
