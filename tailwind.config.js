/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '0.75rem'
      },
      fontSize: {},
      colors: {
        system: {}
      },
      fontFamily: {}
    }
  },
  plugins: []
}
