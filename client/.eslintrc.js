module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'promise'],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  rules: {
    'comma-dangle': [
      'error',
      {
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'max-len': [
      'error',
      120,
      {
        ignoreComments: true,
        ignoreStrings: true,
      },
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 5,
      },
    ],
    'class-methods-use-this': 0,
    'func-names': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'no-underscore-dangle': 0,
    'no-confusing-arrow': 0,
    'new-cap': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-buffer-constructor': 0,
    'no-unused-expressions': 0,
    'jsx-a11y/label-has-for': 0,
    'object-curly-spacing': ["error", 'always'],
    "comma-dangle": ["error", "always-multiline"],
    "arrow-body-style": ["error", "as-needed"]
  },
};
