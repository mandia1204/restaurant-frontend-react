const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: { bundle: ['./src/index.js'] },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'eslint-loader'
          ]
        },
        {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader',
            ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    optimization: {
        splitChunks: {
          chunks: 'initial',
          automaticNameDelimiter: '-'
        },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new HtmlWebpackPlugin({
        title: 'Restaurant app',
        template: './webpack/index.template.html'
      }),
      new CleanWebpackPlugin(['dist'], {
        // exclude:  ['oli.html'],
        verbose:  true,
        dry:      false
     }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ]
    ,
    output: {
      filename: '[name].js',
      path: __dirname + '/dist',
      publicPath: '/',
    },
    mode: 'production'
  };