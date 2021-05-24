import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from '../Routes';
import App from '../App';

export default (req,res,resolve) => {
  const content = renderToString(
    <App/>
  );
  

  // required app-r template to work
  // resolve({
  //     status: 200,
  //     markup: `
  //       <div id="root">${content}</div>
  //       <div> other content new content 8</div>
  //       <script src="http://localhost:3001/client.js"></script>
  //       `
  //   })


  // required local template to work
  return `
  <div id="root">${content}</div>
  <script src="/client.js"></script>
`
};
