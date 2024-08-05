/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      glitch: ["Glitch", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend:{
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        scaleUp: 'scaleUp 0.3s ease-in-out',
        slideInFromRight: 'slideInFromRight 1s ease-out',
        slideInFromLeft: 'slideInFromLeft 1s ease-out',
      },
    }
  },
  plugins: [],
};
