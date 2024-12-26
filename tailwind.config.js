/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(4,109,164)',
        customWhite: `rgb(240,236,236)`
      },
    },
  },
  plugins: [],
}

