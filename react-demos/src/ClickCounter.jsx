//Create a functional component called ClickCounter.
//It should have a paragraph tag that displays the current 'count'
//and a button element that increments the count whenever it is clicked.
//Import and use this component in App.jsx.

import { useState } from "react";
/* useState is a function that returns an array that contains two things:
  a variable and a function whose only job is to change that variable (or SET it)
  the parameter you give useState sets the initial value of the variable
  */
const ClickCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Exercise 2</h2>
            <p>The current count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment the count!</button>
            <button onClick={() => setCount(0)}>Reset the count!</button>
        </>
    )
}

export default ClickCounter