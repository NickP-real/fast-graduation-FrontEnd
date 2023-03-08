/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fred: "#fa897B",
        fgreen: "#D0E6A5",
        fcyan: "#86E3CE",
        fyellow: "#FFDD94",
        fpurple: "#CCABD8",
      },
    },
  },
  plugins: [],
};
