/** @type {import('tailwindcss').Config} */
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
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      black: '#292727',
      gray: '#4E4B48',
      'clickable-gray': '#786E6E',
      'stroke-gray': '#8F8F8F',
      white: '#ffffff',
    },
    fontSize: {
      xs: [
        '1rem',
        {
          lineHeight: '180%',
          letterSpacing: '-0.04rem',
        },
      ],
      sm: [
        '1.2rem',
        {
          lineHeight: '120%',
          letterSpacing: '-0.06rem',
        },
      ],
      md: [
        '1.6rem',
        {
          lineHeight: '130%',
          letterSpacing: '-0.08rem',
        },
      ],
      lg: [
        '2.1rem',
        {
          lineHeight: '95%',
          letterSpacing: '0',
        },
      ],
      xl: [
        '3.2rem',
        {
          lineHeight: '96%',
          letterSpacing: '0',
        },
      ],
      '2xl': [
        '4.8rem',
        {
          lineHeight: '98%',
          letterSpacing: '0',
        },
      ],
      '3xl': [
        '7.2rem',
        {
          lineHeight: '90%',
          letterSpacing: '0',
        },
      ],
      '4xl': [
        '10rem',
        {
          lineHeight: '90%',
          letterSpacing: '0',
        },
      ],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    function ({ addUtilities, addVariant, matchUtilities, theme }) {
      addUtilities({
        '.text-wrap': { 'text-wrap': 'wrap' },
        '.text-nowrap': { 'text-wrap': 'nowrap' },
        '.text-balance': { 'text-wrap': 'balance' },
      });

      addVariant('js', ':root.js &');
      addVariant('parent', ':has(>&)');
      addVariant('not-first', '&:not(:first-child)');
      addVariant('not-last', '&:not(:last-child)');
    },
  ],
};
