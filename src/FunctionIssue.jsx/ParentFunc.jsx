import React, { useCallback, useState } from 'react'
import ChildFunc from './ChildFunc'

function ParentFunc() {
    let [counter,setCounter]=useState(0)
  const   print = useCallback (()=>
    {
        console.log("Rendered");
    },[]);

  return (
    <div>
        <h3>Task 8</h3>
        <button onClick={()=>setCounter(counter+1)}>Counter</button>
        <p>Value: {counter}</p>
        <ChildFunc passFunc={print}/>
    </div>
  )
}

export default ParentFunc