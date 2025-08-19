/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Livvic: [["Livvic", "sans-serif"]],
        Poppins: [["Poppins", "sans-serif"]],
      },
      colors: {
        primary: "#0C2556",
        light_primary: " #ffffff14",

        secondary: "#3378FF",

        white: "#ffffff",
        light_white: "#fafafa",

        black: "#00000",
        light_black: "#111111",

        gray: "#666666",
        light_gray: "#f0f0f0",

        dark_gray: "rgba(51, 51, 51, 80%)",
      },
    },
  },
  plugins: [],
}

