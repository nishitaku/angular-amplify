module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
          fallback: {
            crypto: false,
          },
        },
      },
    ],
  },
};
