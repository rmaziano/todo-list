/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'light-gray': '#eee',
      'green-color': '#00a816',
      'blue-color': '#628ba7',
      white: '#fff',
      black: '#000',
      red: 'red',
      'bright-orange': 'rgb(252, 109, 0)',
    },
    extend: {
      backgroundImage: {
        hero: 'url(../public/images/mountain.jpg)',
      },
      boxShadow: {
        s1: '0 5px 10px rgb(0 0 0 / 10%)',
        s2: 'inset 5px 5px 5px rgb(0 0 0 / 10%),inset 0 -5px 5px rgb(0 0 0 / 10%)',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      },
    },
  },
  plugins: [],
}
