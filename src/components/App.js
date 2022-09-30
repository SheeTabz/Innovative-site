
import React,{ useState } from 'react';
import "../App.css";
import FormInput from './FormInput';
import ItemList from './ItemList';

function App() {
  const initialCount = 0;
const [count,setCount] = useState(initialCount)

function increment5(){
  for (let i = 0; i <5; i++) {
    //Good practice to setStae using a call back
setCount((prevValue) => prevValue + 1)
}
}
  return (
    <div className="App">
      <h2>Start Count Down when ready</h2>
      <label>Likes : {count}<br/>
      <button onClick={() => setCount(count+1)}>Like</button>
      <button onClick={() => setCount(count-1)}>Unlike</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={increment5}>Add5 Gifts</button>
      </label>
      <br/><br/>
     <FormInput/>
    <ItemList/>
    </div>
  );
}

export default App;
