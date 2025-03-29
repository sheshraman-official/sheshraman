/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        wallpoet: ["Wallpoet", "sans-serif"],
        sirin: ["Sirin Stencil", "sans-serif"], 
        caveat: ["Caveat", "cursive"],
      },
      backgroundImage: {
        'blueprint-pattern': "url('/pattern.webp')", 
      },
      colors: {
        blueprintBlue: "#1E3A8A",
        lightBlueprint: "#3B82F6",
        concreteGray: "#D1D5DB",
      }
    },
  },
  plugins: [],
};
