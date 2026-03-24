import { useContext } from 'react'
import { nameContext } from '../App'

function Display() {
    let  name=useContext(nameContext)
    console.log(name);
    return (
    <>
    <div>Display</div>
    <h2 className='text-2xl'>Passed using use Context {name}</h2>
    </>
  )
}

export default Display