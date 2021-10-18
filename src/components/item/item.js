import { useState } from "react";
import './item.css';
import { ReactComponent as Squid } from '../../ressources/pics/squid-svgrepo-com.svg';
// import imgOrdi from '../../ressources/pics/imgOrdi.jpg'

//le composant se met à jour quand ce qu'on lui passe change
function Item(props) {
    const [itemState, setItemState] = useState("Item state !!");
    // const styleCss = {color: "blue", backgroundColor: "grey"}
    const myLetter = "g";

    return (
        <div>
            <Squid />
            <h1 /*style={styleCss}*/ className="titre-item">{props.number}</h1>
            <button onClick={() => props.func(itemState)}>Change state</button>
            {/*comme l'image est dans ../../public ça permet le reférencement dynamique : avec le `xyz${myVar}`*/}
            <img src={process.env.PUBLIC_URL + `/imgOrdi.jp${myLetter}`} alt=""/>
        </div>
    );
}

export default Item;