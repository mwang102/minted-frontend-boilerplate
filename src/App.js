import React from 'react';
import { css } from '@emotion/react'

const appStyles = css`
  text-align: center;
`;

const App = () => {
  const logMessage = () => {
    alert('JavaScript Success')
  }

  return (
    <div css={appStyles} className="App"> 
      <header className="App-Header"> Minted Frontend BoilerPlate</header>
      <button onClick={logMessage}>JavaScript OnClick</button>
    </div>
  )
}

export default App;
