const webpack = require('webpack');

module.exports = function(config) {
  config.set({
    basePath: '',
    plugins: [
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      require('karma-tap'),
      'karma-tap-pretty-reporter',
    ],
    frameworks: ['tap'], // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    files: [
      // 'node_modules/@babel/polyfill/dist/polyfill.js',
      'src/components/login/LoginForm.tsx',
      'src/components/login/LoginForm.test.js' //'indexTest.js', 
    ],
    preprocessors: { 
      //'src/components/login/LoginForm.test.js': ['webpack']
      'src/components/login/LoginForm.tsx': ['webpack'],
      'src/components/login/LoginForm.test.js': ['webpack', 'sourcemap']
    },
    client: {
      captureConsole: false
    },
    webpack: {
      // devtool : 'inline-source-map',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
              test: /\.ts|tsx|js|jsx?$/,
              exclude: /node_modules/,
              use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.ts', '.jsx', '.tsx']
      },
      node: {
        fs: 'empty'
      },
      mode: 'none'
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },
    // reporters: ['tap-pretty'], // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // tapReporter: {
    //   prettify: require('faucet'),
    //   sepparator: '****************************',
    //   outputFile: './report/test/test.out.tap'
    // },
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG, // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    autoWatch: true, // enable / disable watching file and executing tests whenever any file changes
    browsers: ['ChromeDebugging'],//ChromeHeadless available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    customLaunchers:{
      ChromeDebugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9222']
      }
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}