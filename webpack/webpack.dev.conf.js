"use strict";
const webpack = require("webpack");
const config = require("./config");
const { merge } = require("webpack-merge");
const path = require("path");
const baseWebpackConfig = require("./webpack.base.conf");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.(css)$/i,
        use: [
          "vue-style-loader",
          "css-loader",
        ],

      },
      {
        test: /\.sass$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // This is the path to your variables
              additionalData: "@import '@/styles/variables.scss'",
            },
          },
        ],
      },
      // SCSS has different line endings than SASS
      // and needs a semicolon after the import.
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",

            options: {
              // This is the path to your variables
              additionalData: "@import '@/styles/variables.scss';",
            },
          },
        ],
      },

    ],
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,
  mode: "development",
  // these devServer options should be customized in /config/index.js
  devServer: {
    inline: true,
    clientLogLevel: "warning",
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, "index.html") },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    disableHostCheck: true,
    host: config.dev.host,
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify("development") },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "static",
          to: config.dev.assetsSubDirectory,
          globOptions: {
            ignore: [".*"],
          },
        },
      ],
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${config.dev.host}:${config.dev.port}`],
      },
    }),
  ],
});
