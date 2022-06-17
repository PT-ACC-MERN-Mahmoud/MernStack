import React from 'react';
import riri from './logo.svg';
import background from "./img/6.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header  className="App-header" style={{ background: '({$background})' }}>
        <img src={background} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
