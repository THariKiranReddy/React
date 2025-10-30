import React, { useContext } from 'react'
import { Calender } from '../Context/CalenderContext';

const Control = () => {
  const {prevMonth,nextMonth,monthName,date} = useContext(Calender);
  return (
    <div style={{display:"flex",justifyContent:"space-between",width:"700px",margin:"0 auto"}}>
        <button style={{backgroundColor:"rgb(65,105,225)",color:"white",borderRadius:"4px",borderColor:"rgb(65,105,225)"}} onClick={prevMonth}>Prev Month</button>
        <p style={{fontSize:"20px"}}>{monthName} {date.year}</p>
        <button style={{backgroundColor:"rgb(65,105,225)",color:"white",borderRadius:"4px",borderColor:"rgb(65,105,225)"}} onClick={nextMonth}>Next Month</button>
    </div>
  )
}

export default Control