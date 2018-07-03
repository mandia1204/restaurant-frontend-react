const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.js');

module.exports = merge(baseConfig('dev'), {
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
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './build',
    hot: true,
    historyApiFallback: true
  }
});
