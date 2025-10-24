import React, { useEffect, useState } from 'react'
import Cnt from './Cnt'
import Btn from './Btn'


const App = () => {
  const [dt,setDt]=useState([]);
  const getCoffee=async()=>{
    try{
      let response=await fetch("http://localhost:3000/coffee");
    let data=await response.json();
    setDt(data);
    }
    catch(error){
      console.log(error);
    }
  }
  // useEffect(()=>{
  // getCoffee();
  // },[]);

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Coffee Store Catalogue</h1>
      <Btn getCoffee={getCoffee}/>
      <Cnt dt={dt}/>
    </div>
  )
}

export default App