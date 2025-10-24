import React, { useEffect, useState } from 'react'
import Card from './Component/Card';
const App = () => {
  const[data,setData]= useState([]);
  const[filteredData,setFilteredData]=useState([]);
  const renderingData=async()=>{
    try{
        const res=await fetch("http://localhost:3000/restaurants");
    const jsondata=await res.json();
    setData(jsondata); //originalData
    setFilteredData(jsondata); // to pass for filteredData
    console.log(data);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    renderingData();
  },[])
  useEffect(()=>{
   console.log(filteredData); 
  },[filteredData])
  const sortByRating=()=>{
    const newData=[...data].sort((a,b)=>(b.rating-a.rating));
    setFilteredData(newData);
  }
  const filtering=(threshold)=>{
    const nom=[...data].filter((item)=>item.rating<=threshold).sort((a,b)=>b.rating-a.rating);
    setFilteredData(nom);
    return nom;
  }
  const costforTwo=()=>{
     const two=[...data].filter((item)=>item.rating>=1).sort((a,b)=>a.cost_for_two-b.cost_for_two);
   setFilteredData(two);
  }
   const costforTwoo=()=>{
     const one=[...data].filter((item)=>item.rating>=1).sort((a,b)=>b.cost_for_two-a.cost_for_two);
   setFilteredData(one);
  }
const acceptCard=()=>{
  const card=[...data].filter((item)=>item.payment.card);
  setFilteredData(card);
}
const acceptCash=()=>{
  const cash=[...data].filter((item)=>item.payment.cash);
  setFilteredData(cash);
}
const acceptUpi=()=>{
  const upi=[...data].filter((item)=>item.payment.upi);
  setFilteredData(upi);
}

  
  return (
    <div>
      <Card sortByRating={sortByRating} filtering={filtering} filteredData={filteredData} costforTwo={costforTwo} costforTwoo={costforTwoo} acceptCard={acceptCard} acceptCash={acceptCash} acceptUpi={acceptUpi}/>
    </div>
  )
}
export default App

