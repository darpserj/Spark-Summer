/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightblue: "#c2e5ff",
      blue: "#6dc1ff",
      lightyellow: "#ffe79d",
      yellow: "#ffd452",
      lightgreen: "#c0e8d3",
      green: "#77d480",
      lightpink: "#ffb5ce",
      pink: "#f379a2",
      white: "#fff",
      black: "#000",
    },
    fontFamily: {
      kamber: ["Kamber"],
      worksans: ["Work Sans"],
    },
    extend: {},
  },
  plugins: [],
};
