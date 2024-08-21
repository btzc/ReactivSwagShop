module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  preset: 'react-native',
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
};
