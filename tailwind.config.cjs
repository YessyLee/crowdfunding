/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  screens: {
    "sm": "480px",
    "md": "768px",
    "lg": "1024px"
  }
}
