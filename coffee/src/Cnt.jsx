import React from 'react'

const Cnt = ({dt}) => {
  return (
    <div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginLeft:"40px",marginTop:"40px"}}>
       {dt.map((item)=>(
        <div key={item.id} style={{width:"700px",height:"400px",border:"1px solid black",display:"flex"}}>
          <div>
           <img src={item.image} style={{width:"300px",height:"400px"}}/>
          </div>
          <div style={{padding:"20px"}}>
           <h2>{item.title}</h2>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <h4>Ingredients:</h4>
                <ol>
                  {item.ingredients.map((ing,index)=>{
                     return  <li key={index}>{ing}</li>
                  })}
                  </ol>
          </div>
        </div>
        ))}
    </div>
  )
}

export default Cnt