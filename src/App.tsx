import React from 'react';

import './App.css';
import HomePage from './component/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HomePage name='Brian' age={39}/>
      </header>
    </div>
  );
}

export default App;
