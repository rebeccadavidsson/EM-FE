const { colors } = require(`tailwindcss/defaultTheme`);
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono'],
        'roboto': ['Roboto']
      },
      screens: {
        'xs': '340px',
        ...defaultTheme.screens,
      },
      colors: {
        primary: colors.indigo,
        blue: colors.blue,
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          md: "2rem",
        },
      },
    },
  },
};
