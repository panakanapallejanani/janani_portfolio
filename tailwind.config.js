/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101014',
        base: '#131318',
        surface: '#19191f',
        raised: '#202229',
        border: '#303039',
        heading: '#f3f1fa',
        body: '#aaa8b7',
        accent: '#b7a0f8',
        accentdeep: '#8060d8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
