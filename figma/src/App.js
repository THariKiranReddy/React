import React from 'react'
import Content from './Content'
import Head from './Head'


const App = () => {
  return (
    <>
     <Head/>
     <div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginTop:"40px",marginLeft:"50px",marginRight:"50px",margin:"auto"}}>
      {[...Array(5)].map((_,i)=>(
       <Content key={i}/>
      ))}
    </div>
    </>
  )
}

export default App