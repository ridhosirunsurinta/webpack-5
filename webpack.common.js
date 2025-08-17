const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    frontend: { import: "./src/index.js", dependOn: "frontend-vendors" },
    "frontend-vendors": [
      // Vendors splitting
      "react",
      "react-dom",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Support .js and .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true, // Enable babel caching
          }
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react", // Don't have to 'import React from 'react'; on top of your component'
    }),
    new HtmlWebpackPlugin({
      title: "Webpack 5",
      template: "public/index.html",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // Include frontend-vendors to the index.html
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"), // After build the dist folder will created
    filename: "[name].[contenthash].js", // Add contenthash for cache busting
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  cache: {
    type: 'filesystem', // Enable persistent caching
    buildDependencies: {
      config: [__filename], // Invalidate cache when webpack config changes
    },
  },
};
