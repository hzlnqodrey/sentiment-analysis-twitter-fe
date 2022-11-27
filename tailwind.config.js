/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        aspectRatio: {
          '4/3': '4 / 3',
          '1/2': '1 / 2',
          '2/1': '2 / 1'
        },
      },
      fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
    plugins: [],
  }