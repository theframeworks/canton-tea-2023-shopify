/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important: '#app:is(#app)', // adding double id specificity to the tailwind classes
  content: [
    './assets/base.css',
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      foreground: 'var(--color-foreground)',
      'clickable-grey': '#786E6E',
      'canton-grey': '#4E4B48',
      'stroke-grey': '#8F8F8F',
    },
    screens: {
      sm: '500px',
      md: '750px',
      lg: '990px',
      xl: '1200px',
    },
    extend: {
      fontFamily: {
        body: 'var(--font-body-family)',
        heading: 'var(--font-heading-family)',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
