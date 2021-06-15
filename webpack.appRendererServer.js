const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './src/helpers/renderAppRServerBundle.js',
  output: {
    filename: 'appRendererServerBundle.js',
    path: path.resolve(__dirname, './build'),
    libraryTarget: 'commonjs2',
  },
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
};
