import React, { useEffect, useState } from 'react'

function SearchBox() {
  let [items, setItems] = useState([])
  let [query,setQuery]=useState("")
  let [searched,setSerched]=useState(items)

useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://dummyjson.com/users")
      const response = await data.json()
      console.log(response.users);
      setItems(response.users)
    }
    getData()
  }, [])
  useEffect(()=>
  {
   const timer=setTimeout(()=>
  {
    handleSearch(query)
  },500)
  return ()=>
  {
    clearTimeout(timer)
  }
  },[query])

function handleSearch(e)
{
 let arr=  items.filter((i)=>i.email.includes(e))
 
 setSerched(arr)
}
  return (
    <>
   <input type='text' className='w-5/6 border-2' placeholder='Search....'  onChange={(e)=>{setQuery(e.target.value)}}/>
    <div>
      {query=="" ?items && items.map(item =>
        <div key={item.id} className='m-3'>
            <h2>{item.username}</h2>
            <h2>{item.email}</h2>
        </div>
      ):searched.length>0 ? searched.map((item)=>
        <div key={item.id} className='m-3'>
            <h2>{item.username}</h2>
            <h2>{item.email}</h2>
        </div>
      ):<h2>No Results</h2>}
    </div>
    </>
  )
}

export default SearchBox