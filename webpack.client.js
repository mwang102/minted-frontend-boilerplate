const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  watch: true,
  entry: ['@babel/polyfill', './src/client.js'],
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, './build'),
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
  devServer: {
    port: 8080,
    historyApiFallback: true,
    hot: true,
    contentBase: path.join(__dirname, 'build'),
  },
  plugins: [
    // new HtmlWebPackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
