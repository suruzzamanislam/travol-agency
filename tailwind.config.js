/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: '.5rem',
      // default breakpoints
      screens: {
        sm: '728px',
        md: '910px',
        lg: '1070px',
        xl: '1210px',
      },
    },
    extend: {},
  },
  plugins: [],
};
