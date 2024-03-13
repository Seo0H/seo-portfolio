/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './contents/**/*.{ts,tsx,md,mdx}'],
  theme: {},
  plugins: [require('@tailwindcss/typography')],
};
