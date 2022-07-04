import { useParams } from "react-router"
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';


const Home = (props) => {
  return (
    <div>
      <h1 style = {{textAlign: "center"}}>Welcome</h1>
      <Link to={"/about"}>Go to About</Link>
    </div>
  );
}


const Number = (props) => {
  const { number } = useParams();
  return (
    <div>
      <h1 style= {{color: "blue", textAlign:"center"}}>The number is {number}</h1>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
}

const Hello = (props) => {
  const { hello } = useParams();
  return (
    <div>
      <h1 style= {{color: "blue", textAlign:"center"}}>The word is: {hello}</h1>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
}

const Color = (props) => {
  const {color1} = useParams();
  const {color2} = useParams();
  return (
    <div>
      <h1 style= {{backgroundColor: (color1), color:(color2)}}>The background is {color1}.The text color is {color2}</h1>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
}

const routes = [
  // /:orderId -> matches only numbers
  { path: '/:number(\\d+)' },
  // /:productName -> matches anything else
  { path: '/:hello' },
]



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:number" element={<Number />} />
        <Route path="/hello/:hello" element={<Hello />} />
        <Route path="/hello/:color1/:color2" element={<Color />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
