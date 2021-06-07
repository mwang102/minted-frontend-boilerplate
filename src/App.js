import React from 'react';

const App = () => {
  const logMessage = () => {
    alert('JavaScript Success')
  }

  return (
    <div className="App"> 
      <header className="App-Header"> Minted Frontend BoilerPlate 17</header>
      <button onClick={logMessage}>JavaScript OnClick</button>
    </div>
  )
}

export default App;
