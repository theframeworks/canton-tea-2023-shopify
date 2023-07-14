module.exports = {
  prefix: 'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '570px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
    },
    color: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      black: '#000000',
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    function ({ addVariant, matchUtilities, theme }) {
      (function (variant, selector) {
        addVariant(variant, `&${selector}`);
        addVariant(`group-${variant}`, `:merge(.group)${selector} &`);
        addVariant(`peer-${variant}`, `:merge(.peer)${selector} ~ &`);
      })('hocus', ':where(:hover,:focus,:focus-within)');

      addVariant('js', ':root.js &');
      addVariant('parent', ':has(>&)');
      addVariant('not-first', '&:not(:first-child)');
      addVariant('not-last', '&:not(:last-child)');
    },
  ],
};
