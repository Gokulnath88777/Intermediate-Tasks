import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LinkedCounter from './LinkedCounter'
import UserNameValidation from './UserNameValidation'
import UniqueList from './UniqueList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LinkedCounter/>
    <UserNameValidation/>
    <UniqueList/>
     </>
  )
}

export default App
