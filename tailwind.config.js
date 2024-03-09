module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'copperfield': {
          DEFAULT: '#b87333',
          '50': '#F8F4F0',
          '100': '#e2c7a5',
          '200': '#d1b292',
          '300': '#c29f7f',
          '400': '#a97f5f',
          '500': '#b87333', // default
          '600': '#9e651f',
          '700': '#7f5213',
          '800': '#5f3f0b',
          '900': '#3f2b05'
        },
        'waterloo': {
          DEFAULT: '#777b90',
          '100': '#c4c6d2',
          '200': '#a1a4b0',
          '300': '#888c9b',
          '400': '#6f7386',
          '500': '#777b90', // default
          '600': '#5d6076',
          '700': '#464955',
          '800': '#2d2f33',
          '900': '#1a1a1f'
        },
      },
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'],
        'montserrat': ['Montserrat', 'sans']
      },
      fontSize: {
        'base': '.85rem',
        '8xl': '7rem',
        '9xl': '9rem',
      },
      borderRadius: {
        '220': '220px'
      }
    },
  },
  plugins: [],
}
