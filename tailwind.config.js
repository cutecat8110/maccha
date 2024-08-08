/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '576px', // 手機板
        md: '768px', // > 平板
        lg: '992px',
        xl: '1200px', // > 電腦板
        '2xl': '1400px'
      },
      container: {
        center: true,
        padding: '0.75rem'
      },
      fontSize: {
        h1: [
          '3.75rem',
          {
            lineHeight: 1.2,
            letterSpacing: '0.1em',
            fontWeight: '700'
          }
        ],
        h2: [
          '2.5rem',
          {
            lineHeight: 1.2,
            letterSpacing: '0.1em',
            fontWeight: '700'
          }
        ],
        h3: [
          '2rem',
          {
            lineHeight: 1.2,
            letterSpacing: '0.1em',
            fontWeight: '700'
          }
        ],
        h4: [
          '1.75rem',
          {
            lineHeight: 1.2,
            letterSpacing: '0.1em',
            fontWeight: '700'
          }
        ],
        h5: [
          '1.5rem',
          {
            lineHeight: 1.2,
            letterSpacing: '0.1em',
            fontWeight: '700'
          }
        ],
        h6: [
          '1.25rem',
          {
            lineHeight: 1.2,
            letterSpacing: '0.1em',
            fontWeight: '700'
          }
        ],
        title: [
          '1rem',
          {
            lineHeight: 1.2,
            letterSpacing: '0.1em',
            fontWeight: '700'
          }
        ],
        'sub-title': [
          '.875rem',
          {
            lineHeight: 1.2,
            letterSpacing: '0.1em',
            fontWeight: '700'
          }
        ],
        body: [
          '1rem',
          {
            lineHeight: 1.5,
            letterSpacing: '0.02em',
            fontWeight: '400'
          }
        ],
        'body-2': [
          '.875rem',
          {
            lineHeight: 1.5,
            letterSpacing: '0.02em',
            fontWeight: '400'
          }
        ],
        tiny: [
          '.75rem',
          {
            lineHeight: 1.5,
            letterSpacing: '0.02em',
            fontWeight: '400'
          }
        ],
        icon: '1.5rem',
        'icon-2': '1.25rem',
        'icon-close': '1.75rem',
        logo: '4rem',
        'logo-2': '2rem'
      },
      colors: {
        system: {
          main: {
            800: '#504312',
            600: '#816C1D',
            400: '#A99545',
            200: '#CABD8C',
            50: '#E2DCC1'
          },
          gray: {
            800: '#222222',
            600: '#454545',
            400: '#696969',
            200: '#8C8C8C',
            50: '#D9D9D9'
          },
          dark: '#141313',
          light: '#FAF8F6'
        }
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px'
          },
          '@screen md': {
            maxWidth: '720px'
          },
          '@screen lg': {
            maxWidth: '960px'
          },
          '@screen xl': {
            maxWidth: '1140px'
          },
          '@screen 2xl': {
            maxWidth: '1320px'
          }
        }
      })
    }
  ]
}
