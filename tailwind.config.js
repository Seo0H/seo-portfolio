/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {},
  plugins: [require('@tailwindcss/typography')],
};
