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
        fgreen: "#86E3CE",
        fpurple: "#CCABD8",
      },
    },
  },
  plugins: [],
};
