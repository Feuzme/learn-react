// import React  from "react";
import Item from "./components/item/item";
import { useState } from 'react';

function App() {

  const [dataArr, setDataArr] = useState([
    {nom: "Juliette"},
    {nom: "Paul"},
    {nom: "Catherine"},
    {nom: "Eva"}
  ]);

  return (
    <div className="App">
      {
        dataArr.map((item, index) => {
          console.log(index)
          return <p key={index}>Nom : {item.nom}</p>
        })
      }
    </div>
  )

  // let toggleContenu;

  // if (toggle) {
  //   toggleContenu = <h2>State est true</h2>
  // } else {
  //   toggleContenu = <h2>State est false</h2>
  // }

  // return (
  //   <div className="App">
  //     {/* <p>Short circuit operator : </p>
  //     {
  //       toggle && <h2>true</h2> // short circuit operator ternaire sans else 
  //     }
  //     <p>Ternaire :</p>
  //     {
  //       toggle ? <h1>True</h1> : <h1>Nope</h1>
  //     } */}
  //     <div className={toggle ? "box animated" : "box"}>

  //     </div>
  //     <button onClick={changeState}>Change state</button>
  //   </div>
  // );

  // if(toggle){
  //   return (
  //     <div className="App">
  //       <h1> Oh Hi Mark !</h1>
  //       {toggleContenu}
  //       <button onClick={changeState}>ChangeState</button>
  //     </div>
  //   ); 
  // } else if (toggle === false) {
  //   return (
  //     <div className="App">
  //       <h1> Oh Hi Mark !</h1>
  //       {toggleContenu}
  //       <button onClick={changeState}>ChangeState</button>
  //     </div>
  //   )
  // }

}

export default App;
