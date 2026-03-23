import React, { useRef, useState } from 'react'

function UniqueList() {
  let [name, setName] = useState([])
  let inputRef = useRef()
  function addName() {
    console.log("before");
    let isName = name.some(name=>name ==inputRef.current.value)
    console.log("after");
    if (inputRef.current.value=='')
      {
        alert("The input Field is invalid")
        return;
      } 
    else if (isName) {

        alert("The user already Exist")
        inputRef.current.value=''  
        return;
    }
    else {
      setName([...name,inputRef.current.value])
      inputRef.current.value=''

    }
  }
  return (
    <div className='m-7'>
      <h1>Unique List</h1>
      <input type="text" ref={inputRef} className='border-2'/>
      <button onClick={addName} className='border-2 rounded-sm text-xl bg-gray-500 mx-2'>Add Button</button>
      <ul>
        <li>User Names</li>
      {name.length > 0 ? name.map(n =>
        <li key={n} className='list-disc ml-5'>
            {n}
        </li>
      ) : <p>No Names Available</p>}
      </ul>
    </div>
  )
}

export default UniqueList