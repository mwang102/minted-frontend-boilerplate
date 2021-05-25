import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../App';

export default (req,res,resolve) => {
  const content = renderToString(
    <App/>
  );
  

  // required app-r template to work
  resolve({
      status: 200,
      markup: `
        <div id="root">${content}</div>
        <script src="http://localhost:3001/client.js"></script>
        `
    })
};
