const webpack = require('webpack');

module.exports = function(config) {
  config.set({
    basePath: '',
    plugins: [
      'karma-webpack',
      'karma-chrome-launcher',
      require('karma-tap'),
      'karma-tap-pretty-reporter'
    ],
    frameworks: ['tap'], // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    files: [
      'indexTest.js'
    ],
    preprocessors: { 
      'indexTest.js': ['webpack']
    },
    client: {
      captureConsole: false
    },
    webpack: {
      module: {
        rules: [
          {
              test: /\.js|jsx?$/,
              exclude: /node_modules/,
              use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
      node: {
        fs: 'empty'
      },
      mode: 'production'
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['tap-pretty'], // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    tapReporter: {
      prettify: require('faucet'),
      sepparator: '****************************',
      outputFile: './report/test/test.out.tap'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_DISABLE, // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    autoWatch: false, // enable / disable watching file and executing tests whenever any file changes
    browsers: ['ChromeHeadless'],// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}