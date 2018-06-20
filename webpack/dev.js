const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

console.log(path.resolve(__dirname, '../build'));
module.exports = merge(baseConfig, {
  entry: {
    bundle: ['react-hot-loader/patch', './src/index.js']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname, '..'),
      verbose:  true,
      dry:      false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Restaurant app(development)',
      template: 'webpack/index.template.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
  ,
  output: {
    path: path.resolve(__dirname, '../build')
  }
  ,
  devServer: {
    contentBase: './build',
    hot: true
  },
  mode: 'development'
});
