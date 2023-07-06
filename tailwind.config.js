/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.{md,mdx}',
  ],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
