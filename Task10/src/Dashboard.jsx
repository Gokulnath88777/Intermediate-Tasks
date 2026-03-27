import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import { loginContext } from './AuthProvider';

function Dashboard() {
  let{userName,LogoutFunc}=useContext(loginContext);

  useEffect(()=>
  {
    toast.success(`Welcome ${userName}`)

  },[])
  return (
    <div>
      <h3>Dashboard</h3>
      <h4>Welcome {userName}</h4>
      <button onClick={LogoutFunc}>Logout</button>
      </div>
  )
}

export default Dashboard