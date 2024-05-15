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
        text: "#f4ecea",
        background: "#111111",
        primary: "#df9b87",
        secondary: "#843017",
        accent: "#ea4718",
        gray: "#1e1e1e",
        lightgray: "	#4d4d4d",
        subtext: "#d1e0e3",
      },
    },
  },
  plugins: [require("./tw-plugins/component-loader/index.js")],
};