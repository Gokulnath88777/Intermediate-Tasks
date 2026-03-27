import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import { loginContext } from './AuthProvider'
function Router() {
    let {login}=useContext(loginContext)
  return (
    <>
     <Routes>
        <Route index element={<Login/>}></Route>
        <Route path='/dashboard' element={login?<Dashboard/>:<Navigate to="/"/>}></Route>
     </Routes>

    </>
  )
}

export default Router