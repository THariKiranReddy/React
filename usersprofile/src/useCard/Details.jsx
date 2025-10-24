import React from 'react'
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

const Details = (props) => {
  const {data,leftMove,rightMove,surpriseMe}=props;
  return (
    <div style={{marginLeft:"500px"}}>
        {data.map((item)=>(
          <div key={item.id} style={{width:"600px",height:"437px",border:"1px solid black",textAlign:"center",padding:"20px 50px"}}>
                <img style={{borderRadius:"100px",width:"200px",height:"200px",objectFit:"fill"}} src={item.image}/>
          <h1 style={{fontFamily:"Roboto",size:"25px",fontWeight:"lighter",fontSize:"25px",letterSpacing:"1px"}}>{item.name}</h1>
          <p style={{textTransform:"uppercase",letterSpacing:"1px",color:"blue",fontFamily:"Roboto"}}>{item.job}</p>
          <p style={{lineHeight:"24px",fontSize:"16px",fontFamily:"Roboto",color:"#475569"}}>{item.text}</p>
            <div>
                <button onClick={()=>leftMove()}><FaAngleLeft/></button>
        <button onClick={()=>rightMove()}><FaAngleRight/></button>
            </div>
            <br/>
            <div>
               <button onClick={()=>surpriseMe()}>Surprise Me</button>
            </div>
          </div>
          ))}
    </div>
)}

export default Details