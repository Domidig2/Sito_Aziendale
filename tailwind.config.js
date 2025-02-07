import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#fca93e',
        'dark-gray': '#0d0d0d',
      },
      boxShadow: {
        'logo-hover': '0 0 30px rgba(0, 123, 255, 0.9)',
      },
      transitionProperty: {
        'transform-filter': 'transform, filter',
      },
      backgroundSize: {
        '200%': '200%',
      },
      animation: {
        gradientShift: 'gradientShift 10s ease infinite',
      },
      keyframes: {
        gradientShift: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },

  plugins: [forms, typography],
};

