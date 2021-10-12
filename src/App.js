import * as React from "react";
import './App.css';

const {useState} = React;

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <h1>Hello code sandbox</h1>
      <h2>Start coding to see what happens </h2>
      <p>{counter}</p>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Increase Counter</button>
    </div>
  );
}

export default App;
