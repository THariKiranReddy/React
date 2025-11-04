import React, { useEffect, useState } from 'react'

const Products = () => {
  const [data,setData] = useState([]);
  const fetchingProducts = async()=>{
    try{
       const res = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products');
    const data = await res.json();
    setData(data.data);
    console.log(data.data);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
 fetchingProducts();
  },[]);
 
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Products</h1>
      <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
       {
        data.map((data,index)=>{
          return <div key={index} style={{boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",width:"250px",margin:"0 auto",alignItems:"center",justifyItems:"center",padding:"20px"}}>
               <h3>{data.title}</h3>
            <p>{data.brand}</p>
            <p>{data.price}</p>
              </div>
        })
      }
      </div>

    </div>
  )
}

export default Products