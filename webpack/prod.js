const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const baseConfig = require('./base.js');
const webpack = require('webpack');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig('prod'), {
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
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new webpack.ContextReplacementPlugin(
        /moment[/\\]locale$/,
        /es/
      )
      // ,new BundleAnalyzerPlugin()
    ],
    output: {
      filename: '[name].js'
    }
});