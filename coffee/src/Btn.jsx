import React from 'react'

const Btn = ({getCoffee}) => {
  return (
    <>
    <button onClick={()=>getCoffee()} style={{display:"block",margin:"auto",backgroundColor:"blue",padding:"2px 4px",borderRadius:"4px",color:"white"}}>Get Coffee</button>
    </>
  )
}

export default Btn