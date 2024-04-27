/* eslint-disable no-undef */
import defaultTheme from 'tailwindcss/defaultTheme';

const headerHeight = '60px';

const disabledCss = {
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  blockquote: false,
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './contents/**/*.{ts,tsx,md,mdx}'],
  theme: {
    fontFamily: {
      mono: ['"Reddit Mono"', '"SUIT Variable"'],
    },
    extend: {
      maxWidth: {
        'global-inner-width': '100ch',
      },
      height: {
        header: headerHeight,
      },
      maxHeight: { mainImage: '270px' },
      padding: {
        header: headerHeight,
      },
      colors: {
        'peacock-800': '#125D9E',
        'peacock-200': '#99C1E4',
      },
      spacing: {
        header: headerHeight,
      },
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        '2xl': { css: disabledCss },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
