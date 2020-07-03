const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",

  // add entry points for JavaScript files for the three pages, home, detail, and favorites.
  entry: {
    home: "./public/index.js", 
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Budget Tracking App",
      short_name: "Budgeter",
      description: "An application for keeping track of cashflow on the go.",
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [{
        "src": path.resolve("./public/icons/icon-192x192.png"),
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": path.resolve("./public/icons/icon-512x512.png"),
        "sizes": "512x512",
        "type": "image/png"
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;