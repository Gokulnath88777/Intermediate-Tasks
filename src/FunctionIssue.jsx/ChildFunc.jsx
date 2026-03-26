import React, { useEffect } from 'react'

const ChildFunc=React.memo(({passFunc})=> {
   passFunc()
  return (
    <div>ChildFunc</div>
    
  )
});

export default ChildFunc