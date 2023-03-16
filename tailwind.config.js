/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.125rem",
        xs: "2rem",
      },
    },
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
