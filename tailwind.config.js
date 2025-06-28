/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Hakad Digital Lab Brand Colors - Extracted from your logo
        brand: {
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6', // Primary Blue from logo
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e', // Primary Green from logo
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          }
        }
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-delay': 'fade-in 1s ease-out 0.3s both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'scale-in': 'scale-in 0.5s ease-out',
        'typewriter': 'typewriter 4s steps(40) 1s both',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'fade-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'slide-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-in-left': {
          'from': {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'slide-in-right': {
          'from': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'pulse-glow': {
          '0%': {
            'box-shadow': '0 0 5px rgba(59, 130, 246, 0.5)'
          },
          '100%': {
            'box-shadow': '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(34, 197, 94, 0.6)'
          }
        },
        'rotate-slow': {
          'from': {
            transform: 'rotate(0deg)'
          },
          'to': {
            transform: 'rotate(360deg)'
          }
        },
        'scale-in': {
          'from': {
            opacity: '0',
            transform: 'scale(0.8)'
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'typewriter': {
          'from': {
            width: '0'
          },
          'to': {
            width: '100%'
          }
        },
        'blink': {
          '0%, 50%': {
            opacity: '1'
          },
          '51%, 100%': {
            opacity: '0'
          }
        }
      }
    },
  },
  plugins: [],
};