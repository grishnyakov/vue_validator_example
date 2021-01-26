"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {},

    // Various Dev Server settings
    host: "localhost", // can be overwritten by process.env.HOST
    port: 3030, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: "cheap-module-eval-source-map",
  },
};
