const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: ['@babel/polyfill', './src/helpers/serverBundleRenderer.js'],
//   externals: [webpackNodeExternals()],
  output: {
    filename: 'server-bundle.js',
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
