const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const filePath = path.join(__dirname, './public/js/');
const fileName = 'bundle.js';
const PATHS = {
  src: path.join(__dirname, './src/'),
  dist: path.join(__dirname, 'public'),
};

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: [path.join(__dirname, './src/client.js')],
  },

  output: {
    path: PATHS.dist,
    filename: fileName,
    publicPath: '/',
  },

  watch: true,
  watchOptions: {
    ignored: '/node_modules/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceMaps: true,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ]
  },

  devServer: {
    contentBase: PATHS.dist,
    compress: false,
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },

  plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
  ],
}
