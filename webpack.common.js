const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
index: "./src/js/index.js",
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
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                name: "vendor",
                enforce: true,
            },
        },

    },
  },
  plugins: [new HtmlWebpackPlugin(
    {
        template: './src/index.html',
        inject: true,
        chunks: ['index'],
        filename: 'index.html'
    }
  )],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
