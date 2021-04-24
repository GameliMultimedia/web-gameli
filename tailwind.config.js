const { urlObjectKeys } = require('next/dist/next-server/lib/utils');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme  => ({
        'bar': "url('/bar.png')",
      }),
      height : theme => ({
        "104" : "28rem",
        "408px" : "408px",
      })
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
