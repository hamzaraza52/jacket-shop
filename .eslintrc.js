module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  extends: ['react-app', 'prettier', 'eslint:recommended'],
  env: {
    es6: true,
    browser: true
  },
  parser: 'babel-eslint',
  root: true,
  rules: {
    camelcase: 'off',
    'consistent-return': ['off', { treatUndefinedAsUnspecified: true }],
    'global-require': 'off',
    'new-cap': 'off',
    'no-confusing-arrow': 'warn',
    'no-console': 'error',
    'no-mixed-operators': 'warn',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'warn'
  },
  settings: {
    'import/ignore': [
      'node_modules',
      'src/universal/config',
      'src/universal/viewBag'
    ]
  }
};
