import express from 'express';
// import { matchRoutes } from 'react-router-config';
// import Routes from './Routes';
import renderer from './helpers/renderer';
// import createStore from './store';

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static('build'));

app.get('*', (req, res) => {
  // const store = createStore();
  // const { dispatch } = store;

  const content = renderer(req);

  res.send(content);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
