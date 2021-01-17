"use strict";
const path = require("path");
const utils = require("./utils");
const config = require("./config");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

var MiniCssExtractPlugin = require("mini-css-extract-plugin");

function resolve (dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js",
  },
  plugins: [
    new VueLoaderPlugin(),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: utils.assetsPath("css/[name]_x.css"),
      chunkFilename: utils.assetsPath("css/[id]_x.css"),
    }),
  ],
  output: {
    filename: "[name].js",
    publicPath: config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          cssSourceMap: config.dev.cssSourceMap,
          cacheBusting: config.dev.cacheBusting,
          transformToRequire: {
            video: ["src", "poster"],
            source: "src",
            img: "src",
            image: "xlink:href",
          },
        },
      },
      {
        test: /\.m?js$/,
        include: [
          resolve("src"),
          resolve("node_modules/resize-detector"),
        ],
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("images/[name].[hash:7].[ext]"),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]"),
        },
      },
    ],
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
  },
};
