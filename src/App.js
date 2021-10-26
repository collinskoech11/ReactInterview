import * as React from "react";
import './App.css';
import axios from "axios";

const {useState} = React;
//this is the feature branch
// https://randomuser.me/api
// feature 2
function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <h1>Hello code sandbox</h1>
      <h2>Start coding to see what happens </h2>
      <p>{counter}</p>
      <button onClick={() => {
        setCounter(counter + 1);
        console.log('foo')
      }}>Increase Counter</button>
      <button onClick={() => {
        fetchRandomData();
      }}>Fetch Random data</button>
    </div>
  );
}
const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
  .then(res => {
    //handle access
    console.log(res);
    return res;
  })
  .catch(err => {
    //handle error
    console.error(err);
  });

}
export default App;
