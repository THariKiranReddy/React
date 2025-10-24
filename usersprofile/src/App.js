import React, { useState } from 'react'
import Details from './useCard/Details'
import {data} from './Dn'
const App = () => {
  const[currentIndex,SetCurrentIndex]=useState(0);
  const leftMove=()=>{
    const newData=currentIndex===0? data.length-1 : currentIndex-1;
    SetCurrentIndex(newData);
  }
   const rightMove=()=>{
    const newData=currentIndex=== data.length-1 ? 0 : currentIndex+1;
    SetCurrentIndex(newData);
  }
  const surpriseMe=()=>{
    let randomIndex=Math.floor((Math.random()*data.length));
    while(randomIndex===currentIndex){
      randomIndex=Math.floor((Math.random()*data.length));
    }
    SetCurrentIndex(randomIndex);
  }
  return (
    <>
      <Details data={[data[currentIndex]]} leftMove={leftMove} rightMove={rightMove} surpriseMe={surpriseMe}/>
    </>
  )
}

export default App