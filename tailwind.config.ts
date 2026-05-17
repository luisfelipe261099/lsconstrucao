import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#07090b',
        graphite: '#11151a',
        gold: {
          DEFAULT: '#dcb849',
          light: '#f4d97d',
          dark: '#7a5c13',
        },
        ice: '#FAFAFA',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 40px -10px rgba(220,184,73,0.4)',
        'gold-strong': '0 0 80px -10px rgba(220,184,73,0.6)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #f4d97d 0%, #dcb849 45%, #7a5c13 100%)',
        'radial-gold':
          'radial-gradient(circle at center, rgba(220,184,73,0.18) 0%, rgba(7,9,11,0) 70%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out both',
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
