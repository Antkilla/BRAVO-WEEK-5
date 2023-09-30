//Create a functional component named ToggleText.
//This component should have a button. 
//When the button is clicked, it should toggle a p tag displaying "Button was clicked!" text below it. 
//Import and use this component in App.jsx.

import { useState } from "react";

const ToggleText = () => {
    const [clicked, setClicked] = useState(false);
    const [clicked2, setClicked2] = useState(false);



    return (
        <>
            <h2>Exercise 3</h2>
            {/*When button is clicked, set the value of clicked to the opposite of what currently is */}
            <button onClick={() => setClicked(!clicked)}>Toggle Me!</button>
            <p>{clicked ? "" : "Click button to hide me"}</p>
            <button onClick={() => setClicked2(!clicked2)}>CLICK OPPOSITE!</button>
            <p>{clicked2 ? "10" : "-10"}</p>
        </>
    )

}

export default ToggleText