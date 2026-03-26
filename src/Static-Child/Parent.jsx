import React, { useState } from 'react'
import Child from './Child'

function Parent({children}) {
    let[counter,setCounter]=useState(0)

  return (
    <div className='my-5'>
    <h4 className='text-2xl'>Task 6</h4>
    <button onClick={()=>{setCounter(counter+1);
    console.log("Button clicked");}}>Counter</button>
    <p>Value:{counter}</p>
    {children}
    </div>
  )
}

export default Parent