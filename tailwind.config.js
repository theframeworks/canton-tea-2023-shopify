/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important: '#app',
  content: ['./layout/**/*.liquid', './templates/**/*.liquid', './sections/**/*.liquid', './snippets/**/*.liquid'],
  theme: {
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      black: '#000000',
    },
    screens: {
      md: '750px',
      lg: '990px',
    },
    extend: {
      fontFamily: {
        body: 'var(--font-body-family)',
        heading: 'var(--font-heading-family)',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
