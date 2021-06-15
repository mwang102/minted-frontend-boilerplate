import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './App.jsx';

export default (req, res, resolve) => {
  const content = renderToString(
    <App />
  );

  if (resolve) {
    // resolve comes from app-renderer
    resolve({
      markup: `
      <div id="root">${content}</div>
      <script src="http://localhost:3001/client.js"></script>
      `,
      status: 200,
    });
  } else {
    return `
      <div id="root">${content}</div>
      <script src="/client.js"></script>
    `;
  }
};
