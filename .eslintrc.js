
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'react-app',
    'google',
    // TODO: it looks like prettier is not working
    'plugin:prettier/recommended'
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
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'indent': ['error', 2],
    'object-curly-spacing': ['warn', 'always'],
    'quote-props': ['error', 'as-needed'],
    'react/prop-types': 'warn',
    'no-trailing-spaces': ['error', { 'skipBlankLines': true, 'ignoreComments': true }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-max-props-per-line': ['error', { 'maximum': 1, 'when': 'always' }],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-curly-spacing': ['error', { 'when': 'never', 'children': true }],
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never'
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    // TODO: it looks like prettier is not working
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],

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
