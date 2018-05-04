const path = require("path");
const webpack = require('webpack');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: {
    main: ["./src/index.js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(js|.jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(html|png|jpg|gif|)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new TransferWebpackPlugin()
  ],
  devServer: {
    publicPath: "/",
    contentBase: "./public/"
  }
};