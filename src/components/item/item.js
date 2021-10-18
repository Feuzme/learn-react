import { useState } from "react";
import './item.css';

//le composant se met à jour quand ce qu'on lui passe change
function Item(props) {
    const [itemState, setItemState] = useState("Item state !!");
    // const styleCss = {color: "blue", backgroundColor: "grey"}
    return (
        <div>
            <h1 /*style={styleCss}*/ class="titre-item">{props.number}</h1>
            <button onClick={() => props.func(itemState)}>Change state</button>
        </div>
    );
}

export default Item;