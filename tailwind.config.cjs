/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F0AD4E",
        secondary: "#292B2C",
      },
    },
  },
  plugins: [],
};
