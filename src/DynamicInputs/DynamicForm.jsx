import React, { useState } from 'react'
import { flushSync } from 'react-dom'


function DynamicForm() {

  let [count, setCount] = useState(0)
  let [inputs, setInputs] = useState([])
  function addInput() {
    setCount(prev=>prev+1)
   
    setInputs([...inputs, count])
  }
  function removeFunc(value)
  {
    
    let filtered=inputs.filter((input)=>input!=value)
    setInputs(filtered)
    
  }

  return (
    <div>
      <h3 className='text-2xl'>DynamicForm</h3>
      <button className='border-2 px-2' onClick={addInput}>Add</button>
      {
        inputs && inputs.map(
          (input) =>
            <div  key={input}>
                <input type="text" className='border-2' />
                <button className='border-2 px-2' onClick={()=>removeFunc(input)}>Remove</button>
            </div>
        )
      }
    </div>
  )
}

export default DynamicForm