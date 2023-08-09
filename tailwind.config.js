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
      black: '#000000',
    },
  },
  plugins: [],
};
