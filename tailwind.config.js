/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#EA6D27',
        'color-primary-light': '#FF9153',
        'color-primary-dark': '#CA500C',
        // 'color-primary-extra-dark': '#062336',
        'color-secondary': '#101A24',
        // 'color-secondary-light': '#ffcd83',
        // 'color-secondary-dark': '#f3b454',
        'color-bg-primary': '#101A24',
        'color-bg-light': '#F5F5F5',
        'color-title': '#101A24',
        'color-title-light': '#ffff',
        'color-text': '#667781',
        'color-text-light': '#d4d4d4',
      },
    },
  },
  plugins: [],
};
