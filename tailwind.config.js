/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#C8A2C8',
        dark: '#101820',
        accent: '#2E1E3E',
        secondary: '#A885A8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px #C8A2C8, 0 0 40px #C8A2C8',
      },
    },
  },
  plugins: [],
};
