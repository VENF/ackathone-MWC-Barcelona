module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@infrastructure(.*)$": "<rootDir>/src/infrastructure/$1",
    "^@domain(.*)$": "<rootDir>src/domain/$1",
  },
};
