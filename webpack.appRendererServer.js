const path = require('path');

module.exports = {
  target: 'node',
  entry: ['@babel/polyfill', './src/helpers/renderAppRServerBundle.js'],
  output: {
    filename: 'appRendererServerBundle.js',
    path: path.resolve(__dirname, './build'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'development',
};
