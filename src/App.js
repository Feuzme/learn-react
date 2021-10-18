// import React  from "react";
import Item from "./components/item/item";
import { useState } from 'react';

function App() {
  //Fonction permettant de modifer le state de départ du composant.
  // console.log(useState(10)); //données de départ du composant : ici 10
  const [monState, setMonState] = useState(10);

  const modifyState = (data) => {
    setMonState(data);
  };

  return (
    <div className="App">
      <h1 style={{color: "crimson"}} > Oh Hi Mark !</h1>

      <Item func={modifyState} number={monState} />
    </div>
  );

  //CODE généré par react (dans les grandes lignes)
  // return React.createElement(
  //   'div', 
  //   {className: 'App'},  
  //   React.createElement('h1', null, 'Hello app react')
  // );  
}

export default App;
