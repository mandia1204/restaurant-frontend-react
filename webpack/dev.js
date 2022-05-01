const webpack = require('webpack');
const { merge } = require('webpack-merge')
const baseConfig = require('./base.js');
const webpackMockServer = require("webpack-mock-server");

module.exports = merge(baseConfig('dev'), {
  devtool : 'eval-cheap-module-source-map',
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
  ],
  devServer: {
    static: './build',
    host: '0.0.0.0',
    hot: false,
    historyApiFallback: true,
    port:8080,
    setupMiddlewares: function(middlewares , devServer) {
      webpackMockServer.use(devServer.app, {
          entry: [
              "src/mocks/security.mock.ts",
              "src/mocks/dashboard.mock.ts"
          ],
          before: (req, res, next) => { // you can use this for custom-logging instead of logResponses: true, logRequests: true
              // console.log(`Got request: ${req.method} ${req.url}`);
              // res.once("finish", () => {
              //    console.log(`Sent response: ${req.method} ${req.url}`);
              //  })
              next();
          }
        });

        return middlewares;
      },
    // sockPort: 80  //for skaffold
    // proxy: {
    //   '/dashboardApi': {
    //     target: 'http://localhost:5000',
    //     pathRewrite: {'^/dashboardApi' : '/api'},
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   '/securityApi': {
    //     target: 'http://localhost:3001',
    //     pathRewrite: {'^/securityApi' : '/'},
    //     secure: false,
    //     changeOrigin: true
    //   }
    // }
  }
});
