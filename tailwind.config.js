/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "half-screen": "50vh",
      },
      colors: {
        fred: "#FA897B",
        fbrred: "#FBBDB5",
        fgreen: "#86E3CE",
        fbrgreen: "#D0E6A5",
        fpurple: "#CCABD8",
        fyellow: "#FFDD95B5",
        fbryellow: "#FFE7B4",
        fpink: "#FF5A79",
        fblue: "#7BAEFA",
        fdblue: "#BED5DD",
        fblack: "#5B5C5B",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
