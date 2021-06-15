const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/serverEntrypoint.js',
  externals: [
    webpackNodeExternals(),
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, './build'),
  },
  target: 'node',
};
