const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const baseConfig = require('./base.js');

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
      })
    ],
    output: {
      filename: '[name].js'
    }
});