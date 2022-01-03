module.exports = {
  purge: ["index.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  // theme: {
  //     extend: {},
  // },
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#306787',
    })
  },
  variants: {
      extend: {},
  },
  plugins: [],
};
