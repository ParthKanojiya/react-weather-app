/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#292929",
      },
      backgroundColor: {
        dark: "#10162f",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
