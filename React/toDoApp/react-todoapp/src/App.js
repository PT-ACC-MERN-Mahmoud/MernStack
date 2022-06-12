import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import logo from './daytime.jpg';

function App() {
  return (
    <div className='todo-app'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Hello Dojo</h1>
        <TodoList/>
    </div>
  );
}

export default App;
