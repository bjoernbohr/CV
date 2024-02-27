module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'copperfield': {
          DEFAULT: '#D68A5B',
          '300': '#E39F64',
          '100': '#F8F4F0',
        },
        'waterloo': {
          DEFAULT: '#777b90',
          '900': '#3D4053'
        },
      },
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'],
        'montserrat': ['Montserrat', 'sans']
      },
      fontSize: {
        'base': '.85rem',
        '8xl': '7rem',
        '9xl': '9rem'
      },
      borderRadius: {
        '220': '220px'
      }
    },
  },
  plugins: [],
}
