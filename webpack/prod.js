const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.js');
const webpack = require('webpack');

//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    entry: {
      bundle: ['./src/index.js']
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ]
        }
      ]
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
        filename: '../dist/index.html',
        title: 'Restaurant app',
        template: 'webpack/index.template.html'
      }),
      new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname, '..'),
        verbose:  true,
        dry:      false
    }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js'
    },
    mode: 'production'
});