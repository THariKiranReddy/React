import { Children, createContext, useMemo, useState } from "react";

export const Calender = createContext();

export const CalenderContext = ({children}) => {
         const today = new Date();
    const [date,setDate] = useState({
        year:today.getFullYear(),
        month:today.getMonth()
    });
    const daysInMonth = useMemo(()=>{
        const {year,month} = date;
        const totalDays = new Date(year,month+1,0).getDate();
        const days=[];
        for(let day=1;day<=totalDays;day++){
            const date = new Date(year,month,day);
            days.push({
                date,
                dateNumber:day,
                weekday:date.toLocaleString("default",{weekday:"short"})
            });
        }
        return days;

    },[date]);
    console.log(daysInMonth);
    const monthName = useMemo(()=>{
      return  new Date(date.year,date.month).toLocaleString("default",{month:"short"})
    },[date]);
   console.log(monthName);

    const prevMonth=()=>{
     setDate((prev)=>{
        const prevDate=new Date(prev.year,prev.month-1);
        return ({year:prevDate.getFullYear(),month:prevDate.getMonth()});
     });
    };
    const nextMonth=()=>{
     setDate((prev)=>{
      const next=new Date(prev.year,prev.month+1);
      return ({year:next.getFullYear(),month:next.getMonth()});
     });
    };

   console.log(Date.now());
  return (
  <Calender.Provider value={{prevMonth,nextMonth,daysInMonth,date,monthName}}>{children}</Calender.Provider>
  )
}

export default CalenderContext