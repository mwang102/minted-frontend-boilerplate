// const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const clientWebpackConfig = require('../webpack.client.js');
const serverWebpackConfig = require('../webpack.server.js');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// const options = {
//   contentBase: './build',
//   hot: true,
//   host: 'localhost',
// };

// webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
// const compiler = webpack(webpackConfig);
// const server = new webpackDevServer(compiler, options);

const app = express();

const clientCompiler = webpack(clientWebpackConfig);
const serverCompiler = webpack(serverWebpackConfig);
serverCompiler.watch({}, (error) => {
  if(error) {
    console.error(error);
  }
});

app.use(webpackDevMiddleware(clientCompiler, {
}))

app.use(webpackHotMiddleware(clientCompiler))


const port = process.env.PORT || 3001;

// server.listen(port + 1, () => {
//   console.log(`Listening on port: ${port + 1}`);
// });

// app.use(express.static('build'));

app.get('*', (req, res) => {
  delete require.cache[require.resolve('../build/server.js')]
  const { default: renderApp } = require('../build/server.js');
  const content = renderApp(req);

  res.send(content);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
