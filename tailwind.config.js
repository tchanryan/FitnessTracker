/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        deepteal: '#103B40',
        lightteal: '#8FC4D9',
        softbeige: '#F2E0C9',
        darkbeige: '#D9BEA7',
        coral: '#F2856D',
        brown: '#402712',
      },
      fontFamily: {
        'heading-regular': ['DavidLibre-Regular'],
        'heading-bold': ['DavidLibre-Bold'],
        'text-regular': ['Chivo-Regular'],
        'text-bold': ['Chivo-Bold'],
      },
    },
  },
  plugins: [],
};