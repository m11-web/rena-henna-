/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf6f0',
          100: '#fae8d8',
          200: '#f4d0b0',
          300: '#ecb07f',
          400: '#e08850',
          500: '#d46a2e',
          600: '#c2410c',
          700: '#9a330a',
          800: '#7c2d0d',
          900: '#65270d',
        },
        gold: {
          400: '#d4af37',
          500: '#c9a227',
          600: '#a67c00',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf8f0',
          200: '#f9f0e3',
          300: '#f3e6d0',
        },
        bark: {
          700: '#5c3a1e',
          800: '#3d2613',
          900: '#2d1b0e',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-scale': 'fadeInScale 0.3s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
