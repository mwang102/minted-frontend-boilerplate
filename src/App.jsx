import { css } from '@emotion/react';
import React from 'react';

const appStyles = css`
  text-align: center;
`;

const App = () => {
  const logMessage = () => {
    alert('JavaScript Success');
  };

  return (
    <div
      className="App"
      css={appStyles}
    >
      <header className="App-Header">
        Minted Frontend BoilerPlate
      </header>
      <button
        onClick={logMessage}
      >
        JavaScript OnClick
      </button>
    </div>
  );
};

export default App;
