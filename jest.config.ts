import type { Config } from "@jest/types"

const customConfig: Config.InitialOptions = {
  rootDir: "./",
  testEnvironment: "jsdom",
  preset: "ts-jest",
  testMatch: ["<rootDir>/__tests__/**/*.test.{ts,tsx}"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.(js|ts|jsx|tsx)$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub",
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
}

export default customConfig
