module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {},
    },
  },
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
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'max-len': ['error', { code: 130 }],
    'react/no-did-update-set-state': 'off',
    'no-console': 'off',
    // 'no-unused-vars':'off'
  },
  overrides: [
    {
      files: ['**/*.itest.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
        'react/sort-comp': 'off',
        'object-curly-newline': 'off',
      },
    },
    {
      files: ['**/*.ts'],
      rules: {
        parser: 'typescript-eslint-parser',
        'no-undef': 'off',
      },
    },
  ],
};
