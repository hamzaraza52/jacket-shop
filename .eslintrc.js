module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  extends: ['react-app', 'prettier'],
  env: {
    es6: true,
    browser: true
  },
  parser: 'babel-eslint',
  root: true,
  rules: {
    'global-require': 'off',
    'new-cap': ['error', { capIsNewExceptions: ['Record', 'List'] }],
    'no-confusing-arrow': 'off',
    'no-console': ['error'],
    'no-mixed-operators': 'off',
    camelcase: 'off',
    'consistent-return': ['off', { treatUndefinedAsUnspecified: true }]
  },
  settings: {
    'import/ignore': [
      'node_modules',
      'src/universal/config',
      'src/universal/viewBag'
    ]
  }
};
