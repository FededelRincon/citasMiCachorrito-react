module.exports = {
  purge: ["index.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  // theme: {
  //     extend: {},
  // },
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#2c5288',
     'secondary': '#058bc0',
     'danger': '#f9e4cb',
    })
  },
  variants: {
      extend: {},
  },
  plugins: [],
};
