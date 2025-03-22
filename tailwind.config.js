/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'media', // 'media' (sistem ayarına göre) veya 'class' (manuel kontrol için)
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
          },
        },
        maxHeight: {
          '128': '32rem',
        },
        animation: {
          'fade-in': 'fadeIn 0.3s ease-in-out',
          'slide-in-right': 'slideInRight 0.3s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          slideInRight: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
        transitionProperty: {
          'height': 'height',
          'spacing': 'margin, padding',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
    plugins: [
      // Ekstra plugin'ler isteğe bağlı olarak eklenebilir
      // require('@tailwindcss/forms'),
      // require('@tailwindcss/typography'),
      // require('@tailwindcss/aspect-ratio'),
    ],
  }