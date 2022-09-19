/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F40404",
        para: "#6C6C6C",
        yellow: "#FFB800",
        darklight: "rgba(0, 0, 0, 0.6)",
        bg: "#F0F0F0",
      },
      maxWidth: {
        container: "1144px",
      },
    },
  },
};
