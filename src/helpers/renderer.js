import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../App';

export default (req, store) => {
  const content = renderToString(
    <App/>
  );

  return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;
};
