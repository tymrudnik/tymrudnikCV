/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#E0F5F5" /** Azure Web (Background) */,
        "gray-50": "" /**  */,
        "gray-100": "" /** Experience border */,
        "oxford-blue": "#001428" /** Oxford Blue (Text) */,
        "primary-100": "#B0E7E8" /** Celeste (Container BG) */,
        "primary-300": "" /**  */,
        "primary-500": "#024FA1" /** Button Accent */,
        "secondary-400": "#024FA1" /** Polynesian Blue (Accent) */,
        "secondary-500": "#78D5D7" /** TIffany Blue (Button Primary) */,
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.jpg')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
