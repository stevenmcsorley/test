const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const ImageMinWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const webpack = require("webpack");

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
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mov|mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            attributes: {
              list: [
                {
                  tag: "source",
                  attribute: "src",
                  type: "src",
                },
              ],
            },
            name: "src/assets/video/[name].[ext]",
          },
        },
      },
      {
        test: /\.xml/,
        type: "asset/resource",
        generator: {
          filename: "sitemap.xml",
        },
      },
      {
        test: /\.txt/,
        type: "asset/resource",
        generator: {
          filename: "robots.txt",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [["mozjpeg", { quality: 85 }]],
          },
        },
        generator: [
          {
            preset: "webp",
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ["imagemin-webp"],
            },
          },
        ],
      }),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
          mangle: true,
          compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true,
          },
        },
        extractComments: false,
      }),
    ],
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
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed),
    }),
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      template: "./src/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
      scriptLoading: "defer",
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      template: "./src/about.html",
      inject: true,
      chunks: ["index"],
      filename: "about.html",
      scriptLoading: "defer",
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      template: "./src/booking.html",
      inject: true,
      chunks: ["index"],
      filename: "booking.html",
      scriptLoading: "defer",
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      template: "./src/contact.html",
      inject: true,
      chunks: ["index"],
      filename: "contact.html",
      scriptLoading: "defer",
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      template: "./src/services.html",
      inject: true,
      chunks: ["index"],
      filename: "services.html",
      scriptLoading: "defer",
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      template: "./src/thankyou.html",
      inject: true,
      chunks: ["index"],
      filename: "thankyou.html",
      scriptLoading: "defer",
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      template: "./src/booking-confirm.html",
      inject: true,
      chunks: ["index"],
      filename: "booking-confirm.html",
      scriptLoading: "defer",
    }),
    new ImageMinWebpWebpackPlugin({
      config: [
        {
          test: /(images).*\.(jpe?g|png|webp|ico)/,
          options: {
            quality: 75,
          },
        },
      ],
      overrideExtension: true,
    }),
    new WebpackAssetsManifest({}),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[fullhash].js",
    sourceMapFilename: "[name].[fullhash].map",
    chunkFilename: "[id].[fullhash].js",
    assetModuleFilename: "src/assets/[name][ext]",
  },
};
