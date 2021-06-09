const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
     './src/client.js'
  ],
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, './build'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [require.resolve('react-refresh/babel')],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: './build',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({}),
    new ESLintPlugin({}),
  ]
};
