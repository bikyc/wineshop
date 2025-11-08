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
  safelist: [
    'bg-purple-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-orange-100',
    'text-purple-600',
    'text-green-600',
    'text-blue-600',
    'text-orange-600',
  ],
}
