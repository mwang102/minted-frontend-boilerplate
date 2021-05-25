import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../App';

export default (req,res,resolve) => {
  const content = renderToString(
    <App/>
  );
  
  return `
    <div id="root">${content}</div>
    <script src="/client.js"></script>
  `
};
