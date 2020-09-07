
/**
 * TODO: double check the best practices in defining Google's eslint with CRA.
 * Remove the unnecessary linting rules set by default
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    // 'eslint:recommended',
    'react-app',
    'google'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react'
  ],
  rules: {
    'comma-dangle': ['warn', 'never'],
    'no-console': 'warn',
    // MEMO: the rules below are set by Google's
    // 'quotes': ['error', 'single'],
    // 'semi': ['error', 'always'],
    // 'comma-spacing': ['error', { 'before': false, 'after': true }],
    'indent': ['error', 2],
    'object-curly-spacing': ['warn', 'always'],
    'quote-props': ['error', 'as-needed'],
    'react/prop-types': 'warn',
    'no-trailing-spaces': ['error', { 'skipBlankLines': true, 'ignoreComments': true }],

    'max-len': ['warn',
      {
        code: 130
      } // 130 on GitHub, 80 on npmjs.org for README.md code blocks
    ],
    'arrow-parens': ['error', 'as-needed'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
    'no-negated-condition': 'warn',
    'spaced-comment': ['error', 'always',
      {
        exceptions: ['/']
      }
    ]
  }
};
