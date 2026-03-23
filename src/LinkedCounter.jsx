import{ useState } from 'react'

function LinkedCounter() {
    let [count,setCount]=useState(0)
    function increaseBtn()
    {
       setCount(prev=>prev+1)
    }
    function decreaseBtn()
    {
        if(count>0)
        {
        setCount(prev=>prev-1)
        }
    }
    function resetBtn()
    {
        setCount(0)
    }
  return (
    <div className='m-7'>
    <h3 className='text-3xl'>Linked Counter</h3>
    <p>Count : {count}</p>
    <p>Double Count : {count*2}</p>
    <button className='border-2 p-1 bg-gray-300 px-2 rounded-sm mx-1' onClick={increaseBtn}>Increment</button>
    <button className='border-2 p-1 bg-gray-300 px-2 rounded-sm mx-1' onClick={decreaseBtn}>Decrement</button>
    <button className='border-2 p-1 bg-gray-300 px-2 rounded-sm mx-1' onClick={resetBtn}>Reset</button>
    </div>
  )
}

export default LinkedCounter