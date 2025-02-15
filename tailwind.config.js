/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '599px' },
        tablet: { min: '600px', max: '1023px' },
        desktop: { min: '1024px' },
      },
      colors: {
        'gray-100': 'var(--color-gray-100)',
        'gray-200': 'var(--color-gray-200)',
        'gray-300': 'var(--color-gray-300)',
        'gray-400': 'var(--color-gray-400)',
        'gray-500': 'var(--color-gray-500)',
        'gray-600': 'var(--color-gray-600)',
        'gray-700': 'var(--color-gray-700)',
        'gray-800': 'var(--color-gray-800)',
        'gray-900': 'var(--color-gray-900)',
        'yellow-100': 'var(--color-yellow-100)',
        'yellow-200': 'var(--color-yellow-200)',
        'yellow-300': 'var(--color-yellow-300)',
        'yellow-400': 'var(--color-yellow-400)',
        'yellow-500': 'var(--color-yellow-500)',
        'yellow-600': 'var(--color-yellow-600)',
        'yellow-700': 'var(--color-yellow-700)',
        'yellow-800': 'var(--color-yellow-800)',
        'yellow-900': 'var(--color-yellow-900)',
        'blue-100': 'var(--color-blue-100)',
        'blue-200': 'var(--color-blue-200)',
        'blue-300': 'var(--color-blue-300)',
        'blue-400': 'var(--color-blue-400)',
        'blue-500': 'var(--color-blue-500)',
        'blue-600': 'var(--color-blue-600)',
        'blue-700': 'var(--color-blue-700)',
        'blue-800': 'var(--color-blue-800)',
        'blue-900': 'var(--color-blue-900)',
        'system-red': 'var(--color-system-red)',
        'system-green': 'var(--color-system-green)',
        'system-light': 'rgba(var(--color-system-light) / <alpha-value>)',
        'system-dark': 'rgba(var(--color-system-dark) / <alpha-value>)',
        white: '#FFFFFF',
        dark: '#0E0E0E',
        background: 'var(--color-background)',
        toast: 'rgba(29, 29, 29, 0.6)',
      },
      backgroundImage: {
        'gradient-light':
          'radial-gradient(122.41% 81.02% at 15.55% 83.7%, var(--color-yellow-100, rgba(253, 252, 233, 0.50)) 0%, rgba(248, 250, 251, 0.00) 68.5%), radial-gradient(101.49% 84.29% at 74.32% 32.08%, var(--color-blue-100, #E7EBFF) 0%, var(--color-gray-100, #F8FAFB) 68.5%)',
        'gradient-dark':
          'radial-gradient(122.41% 81.02% at 15.55% 83.7%, var(--color-blue-100, rgba(35, 45, 77, 0.10)) 0%, var(--color-background, rgba(14, 14, 14, 0.10) 68.5%), radial-gradient(137.17% 109.57% at 88.91% 5.18%, var(--color-blue-100, rgba(35, 45, 77, 0.60)) 0%, var(--color-gray-100, rgba(29, 29, 29, 0.60)) 83.32%), var(--color-background, #0E0E0E)',
        'gradient-card-1':
          'radial-gradient(101.49% 84.29% at 74.32% 32.08%, var(--blue-300, #97ADFE) 0%, var(--blue-200, #C3CDFE) 68.5%)',
        'gradient-card-2':
          'radial-gradient(101.49% 84.29% at 74.32% 32.08%, var(--blue-100, #E7EBFF) 0%, var(--gray-100, #F8FAFB) 68.5%)',
      },
      fontSize: {
        // headline
        'headline-1-bold': [
          '40px',
          {
            fontWeight: '700',
            letterSpacing: '-1.1px',
            lineHeight: '1.4',
          },
        ],
        'headline-1-regular': [
          '40px',
          {
            fontWeight: '400',
            letterSpacing: '-1.1px',
            lineHeight: '1.4',
          },
        ],
        'headline-2-bold': [
          '36px',
          {
            fontWeight: '700',
            letterSpacing: '-1.1px',
            lineHeight: '1.34',
          },
        ],
        'headline-2-regular': [
          '36px',
          {
            fontWeight: '400',
            letterSpacing: '-1.1px',
            lineHeight: '1.34',
          },
        ],
        'headline-3-bold': [
          '32px',
          {
            fontWeight: '700',
            letterSpacing: '-1.1px',
            lineHeight: '1.36',
          },
        ],
        'headline-3-regular': [
          '32px',
          {
            fontWeight: '400',
            letterSpacing: '-1.1px',
            lineHeight: '1.36',
          },
        ],
        'headline-4-bold': [
          '28px',
          {
            fontWeight: '700',
            letterSpacing: '-1.1px',
            lineHeight: '1.36',
          },
        ],
        'headline-4-semibold': [
          '28px',
          {
            fontWeight: '600',
            letterSpacing: '-1.1px',
            lineHeight: '1.36',
          },
        ],
        'headline-4-medium': [
          '28px',
          {
            fontWeight: '500',
            letterSpacing: '-1.1px',
            lineHeight: '1.36',
          },
        ],
        'headline-4-regular': [
          '28px',
          {
            fontWeight: '400',
            letterSpacing: '-1.1px',
            lineHeight: '1.36',
          },
        ],
        // title
        'title-1-bold': [
          '24px',
          {
            fontWeight: '700',
            letterSpacing: '-1.1px',
            lineHeight: '1.4',
          },
        ],
        'title-1-semibold': [
          '24px',
          {
            fontWeight: '600',
            letterSpacing: '-1.1px',
            lineHeight: '1.4',
          },
        ],
        'title-1-medium': [
          '24px',
          {
            fontWeight: '500',
            letterSpacing: '-1.1px',
            lineHeight: '1.4',
          },
        ],
        'title-1-regular': [
          '24px',
          {
            fontWeight: '400',
            letterSpacing: '-1.1px',
            lineHeight: '1.4',
          },
        ],
        'title-2-semibold': [
          '20px',
          {
            fontWeight: '600',
            letterSpacing: '-1.1px',
            lineHeight: '1.4',
          },
        ],
        'title-2-medium': [
          '20px',
          {
            fontWeight: '500',
            letterSpacing: '-1.1px',
            lineHeight: '1.4',
          },
        ],
        'title-2-regular': [
          '20px',
          {
            fontWeight: '400',
            letterSpacing: '-1.1px',
            lineHeight: '1.4',
          },
        ],
        'title-3-semibold': [
          '18px',
          {
            fontWeight: '600',
            letterSpacing: '-1.1px',
            lineHeight: '1.445',
          },
        ],
        'title-3-medium': [
          '18px',
          {
            fontWeight: '500',
            letterSpacing: '-1.1px',
            lineHeight: '1.445',
          },
        ],
        'title-3-regular': [
          '18px',
          {
            fontWeight: '400',
            letterSpacing: '-1.1px',
            lineHeight: '1.445',
          },
        ],
        // body
        'body-1-semibold': [
          '16px',
          {
            fontWeight: '600',
            letterSpacing: '-1.1px',
            lineHeight: '1.5',
          },
        ],
        'body-1-medium': [
          '16px',
          {
            fontWeight: '500',
            letterSpacing: '-1.1px',
            lineHeight: '1.5',
          },
        ],
        'body-1-regular': [
          '16px',
          {
            fontWeight: '400',
            letterSpacing: '-1.1px',
            lineHeight: '1.5',
          },
        ],
        'body-2-semibold': [
          '14px',
          {
            fontWeight: '600',
            letterSpacing: '-1.1px',
            lineHeight: '1.6',
          },
        ],
        'body-2-medium': [
          '14px',
          {
            fontWeight: '500',
            letterSpacing: '-1.1px',
            lineHeight: '1.6',
          },
        ],
        'body-2-regular': [
          '14px',
          {
            fontWeight: '400',
            letterSpacing: '-1.1px',
            lineHeight: '1.6',
          },
        ],
        'body-3-semibold': [
          '12px',
          {
            fontWeight: '600',
            letterSpacing: '-1.1px',
            lineHeight: '1.5',
          },
        ],
        'body-3-medium': [
          '12px',
          {
            fontWeight: '500',
            letterSpacing: '-1.1px',
            lineHeight: '1.5',
          },
        ],
        'body-3-regular': [
          '12px',
          {
            fontWeight: '400',
            letterSpacing: '-1.1px',
            lineHeight: '1.5',
          },
        ],
        // caption
        'caption-1-semibold': [
          '10px',
          {
            fontWeight: '600',
            letterSpacing: '-1.1px',
            lineHeight: '1.6',
          },
        ],
        'caption-1-regular': [
          '10px',
          {
            fontWeight: '400',
            letterSpacing: '-1.1px',
            lineHeight: '1.6',
          },
        ],
      },
      boxShadow: {
        normal: 'var(--shadow-normal)',
        emphasize: 'var(--shadow-emphasize)',
      },
      backgroundImage: {
        'complex-gradient': `linear-gradient(0deg, var(--color-gray-100), var(--color-gray-100)),
                           radial-gradient(76.2% 89.67% at 85.14% 22.26%, rgba(231, 235, 255, 0.8) 0%, rgba(248, 250, 251, 0) 79.5%),
                           radial-gradient(69.07% 104.35% at 7.42% 86.67%, rgba(253, 252, 233, 0.5) 0%, rgba(248, 250, 251, 0) 68.5%)`,
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px) translateX(-50%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) translateX(-50%)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
};
