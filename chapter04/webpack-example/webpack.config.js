const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./app/index.jsx",
  output: { 
    path: path.resolve(__dirname, "dist"),
    filename: "boundle.js",
    publicPath: "/assets/"
  },
  devServer: {
     contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
}