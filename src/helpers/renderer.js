import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from '../Routes';
import App from '../App';

export default (req, store) => {
  // const content = renderToString(
  //   <Provider store={store}>
  //     <StaticRouter location={req.path}>
  //       <div>{renderRoutes(Routes)}</div>
  //     </StaticRouter>
  //   </Provider>,
  // );

  const content = renderToString(
    <App/>
  );

  // return `
  //   <div id="root">${content}</div>
  //   <script src="localhost:3001/client.js"></script>
  // `

  return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;
};
