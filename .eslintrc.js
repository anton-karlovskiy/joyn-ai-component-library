
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'google',
    /**
     * TODO:
     * It looks like prettier is not working properly.
     * It overrides some rules from above extends.
     */
    // 'plugin:prettier/recommended'
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
    'react',
    'import'
  ],
  rules: {
    // ESLinting rules
    'comma-dangle': ['error', 'never'],
    'no-console': 'warn',
    'indent': ['error', 2],
    'quote-props': ['error', 'as-needed'],
    'capitalized-comments': 'off',
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
    ],
    // MEMO: They are set by extends
    // 'quotes': ['error', 'single'],
    // 'semi': ['error', 'always'],
    // 'comma-spacing': ['error', { 'before': false, 'after': true }],
    'object-curly-spacing': ['error', 'always'],
    // 'no-trailing-spaces': ['error', { 'skipBlankLines': false, 'ignoreComments': false }],
    // 'no-multi-spaces': 'error',
    // 'space-after-keywords': ['error', 'always'],
    // 'keyword-spacing': ['error', { before: true, after: true }],
    // 'block-spacing': ['error', 'never'],
    // 'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 'space-in-parens': ['error', 'never'],
    // 'capitalized-comments': ['warn', 'always', {
    //   'ignorePattern': 'pragma|ignored',
    //   'ignoreInlineComments': true
    // }],
    
    // React linting rules
    'react/prop-types': 'off',
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
    'react/jsx-closing-bracket-location': ['error', { selfClosing: 'after-props', nonEmpty: 'after-props' }],
    // TODO: It looks like it's not working as expected
    'react/jsx-props-no-multi-spaces': 'error',

    // Prettier linting rules
    /**
     * TODO:
     * It looks like prettier is not working properly.
     * It overrides some rules from above extends.
     */
    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'import/exports-last': 'error'
  }
};
