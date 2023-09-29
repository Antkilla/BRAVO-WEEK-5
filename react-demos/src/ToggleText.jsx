//Create a functional component named ToggleText.
//This component should have a button. 
//When the button is clicked, it should toggle a p tag displaying "Button was clicked!" text below it. 
//Import and use this component in App.jsx.

import { useState } from "react";

const ToggleText = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <h2>Exercise 3</h2>
            {/*When button is clicked, set the value of clicked to the opposite of what currently is */}
            <button onClick={() => setClicked(!clicked)}>Ugly!</button>
            <p>{clicked ? "" : "opposite"}</p>
            <button onClick={() => setClicked(!clicked)}>Toggle Me!</button>
            <p>{clicked ? "" : "Click button to hide me"}</p>
        </>
    )

}

export default ToggleText;