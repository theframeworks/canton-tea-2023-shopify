module.exports = {
  prefix: 'tw-',
  important: '#app',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      fontFamily: {
        body: 'var(--font-body-family)',
        heading: 'var(--font-heading-family)',
      },
    },
    color: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    function ({ addVariant, matchUtilities, theme }) {
      addVariant('js', ':root.js &');
      addVariant('parent', ':has(>&)');
      addVariant('not-first', '&:not(:first-child)');
      addVariant('not-last', '&:not(:last-child)');
    },
  ],
};
