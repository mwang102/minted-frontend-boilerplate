const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: './build',
    hot: true,
  },
  entry: [
    'webpack-hot-middleware/client',
    './src/clientEntrypoint.js',
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
            plugins: [
              require.resolve('react-refresh/babel'),
            ],
          },
        },
      },
    ],
  },
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, './build'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({}),
    new ESLintPlugin({
      extensions: [
        '.js',
        '.jsx',
      ],
      fix: true,
    }),
  ],
};
