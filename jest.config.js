module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['react-testing-library/cleanup-after-each'],
  testMatch: ['**/?(*.)+(spec).js?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.cache/'],
  moduleDirectories: ['node_modules']
};
