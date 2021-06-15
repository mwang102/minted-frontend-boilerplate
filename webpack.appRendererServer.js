const path = require('path');

module.exports = {
  entry: './src/serverEntrypoint.js',
  mode: 'production',
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
    filename: 'appRendererServerBundle.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, './build'),
  },
  target: 'node',
};
