module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files using ts-jest
  },
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/__mocks__/**',
    '!**/node_modules/**',
    '!**/*.d.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
  verbose: true,
  testTimeout: 30000,
};
