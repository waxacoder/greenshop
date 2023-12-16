/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1200px",
        },
      },
      colors: {
        green: {
          DEFAULT: "#46A358",
        },
        black: {
          DEFAULT: "#3D3D3D",
        },
        grey: {
          DEFAULT: "#FBFBFB",
          1: "#727272",
          2: "#A5A5A5",
          3: "#CBCBCB",
          4: "#E5E5E5",
          5: "#ACACAC",
        },
      },
      fontFamily: {
        "cera-pro": "Cera Pro",
      },
    },
  },
  plugins: [],
};
