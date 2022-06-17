
import './App.css';



function App() {
   return (
      <div className="App">
         <Product
            title={"Dehydrated Water"} r
            desc={"Just add two cups of water for a refreshing drink"} 
            cost={49.99}/>
         <Product 
            title={"Toy Car"} 
            desc={"Made out of legos"} 
            cost={19.99} />
         <Product  
            title={"iPAD"} 
            desc={"Really Expensive"} 
            cost={499.99} />
      </div>
   );
}

export default App;
