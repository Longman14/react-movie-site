import './App.css';
import {useState, useEffect} from "react";


const Person = (props) => {
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h2>{props.lastName}</h2>
    <h2>Age: 30</h2>
    </>
  )
}

const App = ()=> {
  const [counter, setCounter, ] = useState(0); 
  const name = null;
  useEffect (()=> {
    alert("You have changed the counter to " + counter)
      }, [counter])

  const isNameShowing = false;
  return (
    <div className="App">
      {/* <Person name = "Damilola" lastName = {"Taller"}/>
      <h1>Hello, {isNameShowing ? name: "Someone"}!</h1>
      <> {name ? <h1>{name}</h1>: <>
      <h1>test</h1>
      <h1>There is no name</h1>
      </>},
      
      </> */}
      <button onClick = {()=> setCounter((prevCount)=> prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick = {()=> setCounter((prevCount)=> prevCount +1)}>+</button>
    </div>
  );
}

export default App;
