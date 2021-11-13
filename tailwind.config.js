module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        '730':'730px'
      }
    },
    fontFamily: {
      sans: ['Space Mono', 'sans-serif'],
      serif: ['Space Mono', 'serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
