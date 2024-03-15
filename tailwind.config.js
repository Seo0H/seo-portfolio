/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './contents/**/*.{ts,tsx,md,mdx}'],
  theme: {
    extend: {
      height: {
        header: '60px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
