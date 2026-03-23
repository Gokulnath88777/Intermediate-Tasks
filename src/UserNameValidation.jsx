import React, { useState } from 'react'

function UserNameValidation() {
  let [error,setError]=useState("")
  function validateFunc(e)
  {
    if(e.target.value.length<5)
    {
      setError("Length is less than 5")
    }
    else 
    {
      setError("Success")
    }

  }
  return (
    <div className='m-7'>
      <h2>Input Validation</h2>
      <input type="text" onChange={validateFunc} onBlur={(e)=>{e.target.value='';setError('')}} className='border-2 '/>
      <p style={{color:error==="Success"?"green":"red"}}>{error}</p>
    </div>

  )
}

export default UserNameValidation