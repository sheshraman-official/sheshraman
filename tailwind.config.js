/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",  // Enable dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins font
      },
    },
  },
  plugins: [],
};
