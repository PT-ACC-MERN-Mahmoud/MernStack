import React, {useState} from 'react';

import './App.css';

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");
  const [counter, setCounter] = useState(0);
  
  const increment =() => {
  setCounter(counter + 1);
};
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  return (
  <div>
    <input placeholder="Enter something..." onChange={onChange}/> 
    {inputValue}
    <br></br>
    {counter}
    <button onClick={increment}>Increment</button> 
  </div>
  );
};


export default StateTutorial;