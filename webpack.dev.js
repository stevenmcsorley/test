const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    // contentBase deprecated in latest webpack v5
    static: "dist",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [
          {loader: "css-loader", options: {sourceMap: true}},
          {loader: "postcss-loader", options: {sourceMap: true}},
          {loader: "sass-loader", options: {sourceMap: true}}
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].css",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
