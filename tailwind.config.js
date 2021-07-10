const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],

  darkMode: false,
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
