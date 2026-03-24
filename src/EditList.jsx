import { useContext, useEffect, useRef, useState } from 'react'
import { userNameContext } from './UniqueList';

function EditList() {
    let [editIndex, setEditIndex] = useState(null)
    let inputRef = useRef()
    let { name } = useContext(userNameContext)
    let [items, setItems] = useState([])
     useEffect(()=>
    {
        setItems(name)
    },[name])

    function editFunc(index) {
        console.log("edit");
        console.log(index);
        setEditIndex(index)

    }
    function saveFunc() {
        let arr = [...name]
        arr[editIndex] = inputRef.current.value
        setItems(arr)
        setEditIndex(null)
    }
    return (
        <>
       
        <div className='my-10 '>
             <h3>Edit List</h3>
             {
                editIndex == null ? items.map((i, index) =>
                    <div key={index}>
                        <li className='inline m-2'>{i}</li>
                        <button className='border-2 px-3 my-1' onClick={() => editFunc(index)}>Edit</button>
                    </div>
                ) : <div>
                    <input type="text" className='border-2' ref={inputRef} />
                    <button onClick={saveFunc}>Save</button>
                </div>
            }

        </div>
    </>
    )
}

export default EditList