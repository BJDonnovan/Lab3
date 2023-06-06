const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader"},
        { test: /\.css$/,
        use: [
            {loader : 'style-loader'},
            {loader:'css-loader'}
        ]
    }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body',
    })
],
mode: 'development'
}