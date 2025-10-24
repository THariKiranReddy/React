import React, { useState } from 'react'
import Button from './Buttons/Button';


const App = () => {
  const [count,setCount]=useState(0);
  const addFunction=()=>{
   setCount(prev=>prev+1);
  }
  const subFunction=()=>{
   setCount(prev=>prev-1);
  }
  const doubFunction=()=>{
   setCount(prev=>prev*2);
  }
  return (
    <>
    <h2>Counter</h2>
    <h3>{count}</h3>
    <Button addFunction={addFunction} subFunction={subFunction} doubFunction={doubFunction}/>
    </>
  )
}

export default App