import React from 'react';

const App = () => {
  const logMessage = () => {
    console.log('logging message')
  }

  return (
    <div> 
      <h1> App </h1>
      <button onClick={logMessage}>Say Hello Back!</button>
    </div>
  )
}

export default App;
