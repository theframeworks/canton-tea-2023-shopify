/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important: '#app',
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
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
