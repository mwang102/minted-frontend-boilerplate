const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const clientWebpackConfig = require('../webpack.client.js');
const serverWebpackConfig = require('../webpack.server.js');

const app = express();

const clientCompiler = webpack(clientWebpackConfig);
const serverCompiler = webpack(serverWebpackConfig);

serverCompiler.watch({}, (error) => {
  if (error) {
    console.error(error);
  }
});

app.use(webpackDevMiddleware(clientCompiler));

app.use(webpackHotMiddleware(clientCompiler));

const port = process.env.PORT || 3001;

app.get('*', (req, res) => {
  delete require.cache[require.resolve('../build/server.js')];
  const {
    default: renderApp,
  } = require('../build/server.js');
  const content = renderApp(req);

  res.send(content);
});

app.listen(port, () => {
  console.info(`Listening on port: ${port}`);
});
