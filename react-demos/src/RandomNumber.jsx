/*Create a functional component named RandomNumber in a separate file. 
This component should render a button and a paragraph. The paragraph should display a number that is initially 0. 
When the button is clicked, a new random number between 1 and 100 should be generated and displayed in the paragraph*/

import { useState } from "react";

const RandomNumber = () => {
    const [number, setNumber] = useState(0);

    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        setNumber(newRandomNumber);
      };
    
    return (
        <>
         <h2>Exercise 10</h2>
         <button style={{color: 'purple'}} onClick={generateRandomNumber}>Generate Random Number</button>
         <p>Generated Number: {number}</p>
            
        </>
    )
}    

export default RandomNumber