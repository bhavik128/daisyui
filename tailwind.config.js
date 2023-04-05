/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: ['light', 'dark']
  },
  theme: {
    container: {
      padding: '1.5rem'
    },
    extend: {}
  },
  plugins: [require('daisyui')]
};
