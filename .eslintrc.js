module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    document: true,
    window: true,
    graphql: true,
  },
  extends: 'eslint-config-airbnb',
  rules: {
    'import/no-extraneous-dependencies': false,
    'react/prop-types': false,
    'react/no-multi-comp': false,
    'react/no-unescaped-entities': false,
    'jsx-a11y/anchor-is-valid': false,
    'space-before-function-paren': ["error", "always"],
    'max-len': 0,
  },
};
