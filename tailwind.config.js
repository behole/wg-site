/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          scan: 'scan 1s linear infinite',
          flicker: 'flicker 0.5s ease-in-out infinite',
        },
        keyframes: {
          scan: {
            'from': { transform: 'translateY(0)' },
            'to': { transform: 'translateY(4px)' }
          },
          flicker: {
            '0%, 100%': { opacity: '0.15' },
            '50%': { opacity: '0.2' }
          }
        }
      },
    },
    plugins: [],
  }