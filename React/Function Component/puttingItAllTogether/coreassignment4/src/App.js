
import './App.css';
import PersonCard from './State/PersonCard';
import background from "./546801.jpg"

function App() {
  return (
    <div>
      <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        hairColor={"Black"}/>
      <PersonCard
        firstName={"John"}
        lastName={"Smith"}
        age={88}
        hairColor={"Brown"}
        />
      
    </div>
  );
}



export default App;
