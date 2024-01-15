/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        't-blue': '#22223B',
        't-purple': '#4A4E69',
        't-pink': '#9A8C98',
        't-orange': '#C9ADA7',
        't-white': '#F2E9E4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
