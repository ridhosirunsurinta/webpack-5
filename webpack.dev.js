const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true, // Reload Automatically
    port: 3000, // PORT
    https: false,
    compress: true,
    open: true, // Open default browser automatically
    historyApiFallback: true, // For React Router
    client: {
      overlay: true, // Show errors as overlay
      progress: true, // Show build progress
    },
  },
  module: {
    rules: [
      {
        test: /.(css|scss|sass)$/i, // Support CSS, SCSS and SASS
        use: [
          "style-loader", // Inject CSS into the DOM
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});
