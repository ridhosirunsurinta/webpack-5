if (process.env.NODE_ENV === "production") {
  // This is triggered when running `npm run build`
  module.exports = {
    plugins: {
      autoprefixer: {},
      cssnano: {},
    },
  };
} else {
  module.exports = {
    plugins: {
      autoprefixer: {},
    },
  };
}
