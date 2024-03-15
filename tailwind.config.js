/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './contents/**/*.{ts,tsx,md,mdx}'],
  theme: {
    extend: {
      height: {
        header: '60px',
      },
      colors: {
        'peacock-800': '#125D9E',
        'peacock-200': '#99C1E4',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
