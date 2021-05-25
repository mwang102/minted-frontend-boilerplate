import express from 'express';
import renderApp from './helpers/renderApp';

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static('build'));

app.get('*', (req, res) => {
  const content = renderApp(req);

  res.send(content);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
