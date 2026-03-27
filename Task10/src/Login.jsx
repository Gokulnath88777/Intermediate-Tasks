import React, { useContext,useRef } from 'react'
import AuthProvider, { loginContext } from './AuthProvider'

function Login() {
  let {LoginFunc}=useContext(loginContext);
  let nameRef=useRef();
  return (
    <>
    <h3>Login</h3>
    <form onSubmit={(event)=>{LoginFunc(event,nameRef)}}>
    <div>
    <label htmlFor="">Name</label>
    <input type="text" placeholder='Enter name' ref={nameRef} required />
    </div>
    <div>
      <label htmlFor="">Email</label>
      <input type="text" placeholder='Enter mail' required/>
    </div>
    <button type='submit'>Login</button>
    </form>
    <p></p>
    </>
  )
}

export default Login