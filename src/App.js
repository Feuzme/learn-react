// import React  from "react";
import Item from "./components/item/item";
import { useState } from 'react';

function App() {
  
  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle)
  }

  let toggleContenu;

  if(toggle){
    toggleContenu = <h2>State est true</h2>
  } else {
    toggleContenu = <h2>State est false</h2>
  }

  if(toggle){
    return (
      <div className="App">
        <h1> Oh Hi Mark !</h1>
        {toggleContenu}
        <button onClick={changeState}>ChangeState</button>
      </div>
    ); 
  } else if (toggle === false) {
    return (
      <div className="App">
        <h1> Oh Hi Mark !</h1>
        {toggleContenu}
        <button onClick={changeState}>ChangeState</button>
      </div>
    )
  }
  
}

export default App;
