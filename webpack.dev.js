const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const cyp = require("./webpack.cypress");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common,{
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // contentBase deprecated in latest webpack v5
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    static: "dist",
    watchFiles: ["src/**/**/*"],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true, warnRuleAsWarning: true, /* Hide interpolation error with webpack */ } },
          { loader: "postcss-loader", options: { sourceMap: true } },
          
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
