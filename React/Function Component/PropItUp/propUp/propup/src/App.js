
import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        Hair Color={"Black"}/>
      <PersonCard
        firstName={"John"}
        lastName={"Smith"}
        age={88}
        hairColor={"Brown"}/>
      <PersonCard
        firstName={'Millard'}
        lastName={'Fillmore'}
        age={50}
        hairColor={"Brown"}/>
      <PersonCard
        firstName={"Maria"}
        lastName={"Smith"}
        Age={50}
        hairColor={"Brown"}/>
      <button onClick={() => alert('This button has beeen clicked!') }>Click</button>
    </div>
  );
}



export default App;
