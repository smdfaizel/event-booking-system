export default {
  testEnvironment: 'jsdom',//node
  moduleFileExtensions: ['js', 'jsx'],
  // Mock CSS and other static files
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};