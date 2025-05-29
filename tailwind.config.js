/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Bangers"', '"Comic Neue"', 'sans-serif'],
        sans: ['"Comic Neue"', 'Arial', 'sans-serif'],
      },
      animation: {
        'panel-appear': 'panel-appear 0.6s ease-out forwards',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'rotate-in': 'rotate-in 0.5s ease-out forwards',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        'panel-appear': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '70%': { transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'rotate-in': {
          '0%': { transform: 'rotate(-10deg) scale(0.8)', opacity: '0' },
          '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'comic': '8px 8px 0px 0px rgba(0,0,0,0.75)',
        'neon': '0 0 10px rgba(250, 204, 21, 0.5), 0 0 20px rgba(250, 204, 21, 0.3)',
        'neon-sm': '0 0 5px rgba(250, 204, 21, 0.5)',
      },
      transitionTimingFunction: {
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
};