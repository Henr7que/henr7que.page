/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'sans-extrabold': ['Poppins-ExtraBold', 'sans-serif'],
      },
      width: {
        '9/10': '90%',
      },
    },
  },
  plugins: [],
}