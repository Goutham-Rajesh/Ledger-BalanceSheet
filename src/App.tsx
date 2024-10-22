import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ledger from './components/Ledger-Balance-Sheet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ledger/>
      </header>
    </div>
  );
}

export default App;
