const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
mode: 'development',
  entry: './src/index.js',
  devServer: {
    // contentBase deprecated in latest webpack v5
    static: 'dist',
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Development' })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};