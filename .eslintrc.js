module.exports = {
    parser: '@babel/eslint-parser',
    extends: [
      '@minted/eslint-config-core',
      '@minted/eslint-config-react',
      '@minted/eslint-config-jest',
    ],
    env: {
      browser: true,
      es6: true,
    }
};