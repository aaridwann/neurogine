module.exports = {
  preset: '@react-native/jest-preset',

  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest/setupFilesAfterEnv.js'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-reanimated|@react-native-vector-icons)/)',
  ],
  // 1. Abaikan folder dist, build, dan artefak lainnya dari pencarian module & test
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/.cache/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/.cache/',
  ],

  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    '!app/**/*.d.ts',
    '!app/**/index.{js,jsx,ts,tsx}',
    '!app/**/types.{js,jsx,ts,tsx}',
    '!app/**/*.styles.{ts,tsx}',
    '!app/**/index.tsx',
    '!app/**/*.configs.{ts,tsx}',
    '!app/**/*.types.{ts,tsx}'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    'text',
    'text-summary',
    'lcov',
    'html',
  ],

  clearMocks: true,
  restoreMocks: true,
  resetMocks: false,

  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
  ],

  setupFilesAfterEnv: ['<rootDir>/jest/setupFilesAfterEnv.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-gesture-handler|react-native-toast-message)/)',
  ],
};