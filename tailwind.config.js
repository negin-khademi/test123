/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        grays: "hsl(0, 40%, 98%)",
        accent: "#c4c6b6",
        darkAccent: "#566357",
        customGreen: "#4caf50",
      },
    },
  },
  plugins: [],
};
