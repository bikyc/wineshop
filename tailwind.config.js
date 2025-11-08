/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fdf4f6',
          100: '#fbe8ed',
          500: '#c41c3d',
          600: '#a11633',
          700: '#7d1128',
          900: '#3d0a13',
        },
      },
    },
  },
  plugins: [],
}