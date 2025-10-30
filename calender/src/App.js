import React from 'react'
import Table from './Components/Table'
import Control from './Components/Control'
import CalenderContext from './Context/CalenderContext'

const App = () => {
  return (
    <CalenderContext> <h1 style={{textAlign:"center"}}>Calendar</h1>
    <Control/>
    <Table/></CalenderContext>
  )
}

export default App