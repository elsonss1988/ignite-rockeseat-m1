import { useState } from "react";
import React from 'react';

 const Counter = () =>{
    const [counter, setCounter] = useState(0);
    
 function increment() {
        setCounter(counter+1);
        console.log(counter);

    }

 function inc(){
    console.log('Hello')
 }
    return(
        <>
        <h2>{counter}</h2>
        <button type="button" onClick={increment}>
            Increment
        </button>
        
        </>
    )
}
export default Counter;