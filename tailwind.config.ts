import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#132D47',
        'primary-light': '#81DE76',
        'secondary-dark': '#82B29A',
        'secondary-light': '#96DDA5',
        'test-color': '#ff0000',
      },
      fontFamily: {
        heading: ['Atyp', 'sans-serif'],
        body: ['Duplet', 'sans-serif'],
      },
      fontSize: {
        display: ['60px', { fontWeight: '600', lineHeight: '1.2' }],
        h1: ['40px', { fontWeight: '600', lineHeight: '1.3' }],
        h2: ['32px', { fontWeight: '600', lineHeight: '1.3' }],
        h3: ['24px', { fontWeight: '500', lineHeight: '1.4' }],
        bodyMedium: ['18px', { fontWeight: '600', lineHeight: '1.5' }],
        bodyRegular: ['18px', { fontWeight: '400', lineHeight: '1.5' }],
        bodySmall: ['14px', { fontWeight: '400', lineHeight: '1.5' }],
        linkText: ['18px', { fontWeight: '600', lineHeight: '1.5' }],
      },
       borderRadius: {
        '3xl': '24px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;