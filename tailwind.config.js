/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06A6E3",
        secondary: "#002C73",
        tertiary: "#EFF2F9",
        quaternary: "#06a4e3b5"
      },
      fontFamily: {
        newFont: ['Kaushan Script', 'cursive'],
        sans: ['Inter Tight', 'sans-serif'],
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

