const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "../client/src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "../client/src/template.html",
    }),
    new HtmlWebpackPlugin({
      template: "../client/src/login.html",
      inject: true,
      filename: "login.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
