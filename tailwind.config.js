// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
          sans: ['Inter', 'sans-serif'], // or your chosen font
      },
    },
  },
  plugins: [],
};
