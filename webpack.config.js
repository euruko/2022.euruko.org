const path = require("path");
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");

let config = require("./config/webpack.defaults.js");

// Add any overrides to the default webpack config here:
//
// Eg:
//
//  ```
//    const path = require("path")
//    config.resolve.modules.push(path.resolve(__dirname, 'frontend', 'components'))
//    config.resolve.alias.frontendComponents = path.resolve(__dirname, 'frontend', 'components')
//  ```
//
// You can also merge in a custom config using the included `webpack-merge` package.
// Complete docs available at: https://github.com/survivejs/webpack-merge
//
// Eg:
//
//  ```
//    const customConfig = { ..... }
//    config = merge(config, customConfig)
//  ```

// Used to break cache on generate of new SW where file is composed of multiple pieces that can't be watched.
const genRanHex = (size = 24) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");

const customConfig = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "frontend/**/*.{png,svg,jpg,jpeg,gif,json,geojson}"),
          to({ context, absoluteFilename }) {
            return `${path.relative(
              `${context}/frontend/javascript`,
              path.dirname(absoluteFilename)
            )}/[name].[contenthash][ext]`;
          },
        },
      ],
    }),
    new GenerateSW({
      cacheId: genRanHex(),
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      directoryIndex: "index.html",
      skipWaiting: true,
      additionalManifestEntries: [
        {
          url: "/index.html",
          revision: `${+new Date()}`,
        },
        {
          url: "/code/index.html",
          revision: `${+new Date()}`,
        },
      ],
      navigationPreload: true,
      runtimeCaching: [
        {
          handler: "NetworkFirst",
          urlPattern: /^https?:\/\/(localhost|2022\.euruko\.org)(:\d+)?(|\/.*)$/,
          options: {
            cacheName: "core",
          },
        },
      ],
    }),
  ],
};

config = merge(config, customConfig);

////////////////////////////////////////////////////////

module.exports = config;
