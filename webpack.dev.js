
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // contentBase deprecated in latest webpack v5
    static: "dist",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}, // no need for hmr webpack 5 supports it automatically
          },
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
});
