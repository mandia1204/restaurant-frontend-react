const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.js');

module.exports = merge(baseConfig('dev'), {
  devtool : 'cheap-module-eval-source-map',
  entry: {
    bundle: ['react-hot-loader/patch','@babel/polyfill', './src/index.js']
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
    historyApiFallback: true,
    proxy: {
      '/dashboardApi': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/dashboardApi' : '/api'},
        secure: false,
        changeOrigin: true
      },
      '/securityApi': {
        target: 'http://localhost:3001',
        pathRewrite: {'^/securityApi' : '/'},
        secure: false,
        changeOrigin: true
      }
    }
  }
});
