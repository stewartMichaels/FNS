/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        mybgcolor: '#1c1c1c',
        myyellow: '#FFE002',
        myotheryellow: '#FFDB15',
        almostyellow: '#B28228',
        myviolet: '#8A6FDF',
        mygreen: '#A8E10C',
        mypink: '#FF5765',
      },
      fontFamily: {
        open: ['Open Sans', 'san-serif'],
        sri: ['Sriracha', 'cursive'],
      },
    },
  },
  plugins:[],
}
