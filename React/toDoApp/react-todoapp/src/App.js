import "./App.css";
import React, {
  useState,
  useEffect
} from "react";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState({});
  return ( <
    div className = "todo-app" >
    <
    header className = "App-header" > < /header> <
    h1 > Hello Dojo < /h1> <
    TodoList / >
    <
    /div>
  );
}

export default App;