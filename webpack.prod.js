const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const content = require("figlet");

console.log(
  content.textSync("Test", {
    font: "standard",
    width: 80,
    height: 40,
    whitespaceBreak: true,
  })
);

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
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              warnRuleAsWarning: true /* Hide interpolation error with webpack */,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
    }),
  ],
  
});
