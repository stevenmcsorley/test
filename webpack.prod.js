const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}, // no need for hmr webpack 5 supports it automatically
          },
          "css-loader",
          { loader: "sass-loader", options: { sourceMap: true, warnRuleAsWarning: true, /* Hide interpolation error with webpack */ } },
          "postcss-loader",
          
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
