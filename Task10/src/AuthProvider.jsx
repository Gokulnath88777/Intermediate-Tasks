import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const loginContext=createContext()
function AuthProvider({children}) {
    let navigate=useNavigate()
    let [userName,setUserName]=useState()
    let[login,setLogin]=useState(false)
    function LoginFunc(event,name)
    {
        event.preventDefault();
        setLogin(true)
        setUserName(name.current.value)
        navigate("/dashboard");

    }
    function LogoutFunc()
    {
        console.log("Logut");
        setLogin(false);
        setUserName(null)
        navigate("/")
    }
  return (
<loginContext.Provider value={{login,LoginFunc,LogoutFunc,userName}}>
    {children}
</loginContext.Provider>
)
}

export default AuthProvider