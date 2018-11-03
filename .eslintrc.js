module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    'react/jsx-uses-vars': ['error'],
    'linebreak-style': ['error', 'unix'],
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    // 'no-console':'off',
    // 'no-unused-vars':'off'
  },
};
