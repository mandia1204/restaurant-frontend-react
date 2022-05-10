const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const env = 'development';
module.exports = function(config) {
  config.set({
    basePath: '',
    plugins: [
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      require('karma-tap'),
      'karma-tap-pretty-reporter'
    ],
    frameworks: ['tap', 'webpack'], // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    files: [
      'indexTest.js'
    ],
    preprocessors: { 
      'indexTest.js': ['webpack']
    },
    client: {
      captureConsole: true
    },
    webpack: {
      // devtool: 'inline-source-map',
      module: {
        rules: [
          {
              test: /\.ts|tsx|js|jsx?$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/env', { "modules": "commonjs" }] // for mocking module dependencies
                    ]
                  }
                }
              ]
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.ts', '.jsx', '.tsx'],
        fallback: {
          fs: false,
          path: false
        }
      },
      plugins: [
        new NodePolyfillPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(env)
        })
      ],
      mode: env
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },
    // browserNoActivityTimeout: 300000,
    // captureTimeout: 300000,
    reporters: ['tap-pretty'], // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    tapReporter: {
      prettify: require('faucet'),
      sepparator: '****************************',
      outputFile: './report/test/test.out.tap'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO, // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    autoWatch: false, // enable / disable watching file and executing tests whenever any file changes
    browsers: ['ChromeHeadless'],// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    customLaunchers:{
      ChromeDebugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9222']
      }
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}