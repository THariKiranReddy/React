import React, { useContext } from 'react'
import { Calender } from '../Context/CalenderContext'

const Table = () => {
    const {daysInMonth,date} = useContext(Calender);
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div style={{width:"700px",border:"1px solid lightgray",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",border:"1px solid black",textAlign:"center",borderColor:"lightgray"}}>
            {weekdays.map((i)=>{
              return <div style={{border:"1px solid lightgray",backgroundColor:"rgb(65,105,225)",color:"white"}}>{i}</div>
            })}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)"}}>
            {daysInMonth.map((d)=>{
             return <div>
                <div key={d} style={{border:"1px solid lightgray",textAlign:"center"}}>{d.dateNumber}</div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Table