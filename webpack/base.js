const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  const bundleFolder = env === 'dev' ? 'build': 'dist';
  const mode = env === 'dev' ? 'development': 'production';
  return {
    module: {
      rules: [
        {
          test: /\.(ts|js|jsx|tsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'eslint-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.ts', '.jsx', '.tsx']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'Restaurant app',
        template: 'webpack/index.template.html',
        alwaysWriteToDisk: true
      }),
      new HtmlWebpackHarddiskPlugin(),
      new CleanWebpackPlugin(),
    ],
    output: {
      path: path.resolve(__dirname, `../${bundleFolder}`),
      publicPath: '/'
    },
    mode: mode
  }
};