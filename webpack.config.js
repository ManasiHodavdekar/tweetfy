const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './frontend-js/main.js',
  output: {
    filename: 'main-bundled.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', //untramodel js code, will convert into safer ver of code. if someone with older ver of web browser code will still work
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}