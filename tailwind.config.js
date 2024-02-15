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
      grey: '#E0E0E0',
      'button-grey': '#716F6D',
      'canton-grey': '#4E4B48',
      'canton-berry-and-hibiscus': '#D61B26',
      'clickable-grey': '#786E6E',
      'stroke-grey': '#8F8F8F',
    },
    screens: {
      sm: '500px',
      md: '750px',
      lg: '990px',
      xl: '1200px',
      pw: '1400px',
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
  plugins: [
    require('tailwindcss-debug-screens'),
    function ({ addVariant }) {
      const addVariantWithStates = (variant, selector) => {
        addVariant(variant, `&${selector}`);
        addVariant(`group-${variant}`, `:merge(.group)${selector} &`);
        addVariant(`peer-${variant}`, `:merge(.peer)${selector} ~ &`);
      };

      addVariant('parent', ':has(>&)');

      addVariantWithStates('selected', ':where(:focus,:not(:placeholder-shown))');
    },
  ],
};
