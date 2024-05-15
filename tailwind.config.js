/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Azonix", "sans-serif"],
        paragraphs: ["Trench", "sans-serif"],
      },
      colors: {
        'text': '#eaece6',
        'background': '#0b0d09',
        'primary': '#bac6a5',
        'secondary': '#5f7040',
        'accent': '#a0b775',
      },
    },
  },
  plugins: [require("./tw-plugins/component-loader/index.js")],
};