module.exports = {
  coverageReporters: ["text", "text-summary", "lcov"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "Helpers/(.*)$": "<rootDir>/helpers/$1",
  },
  collectCoverage: true,
};
