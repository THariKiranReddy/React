import React from 'react'

const Buttons = ({data}) => {
  return (
    <div>
        {data.map((item)=>{
            <div>
              <button></button>
        <button></button>
        <button>Surprise Me</button>
            </div>
        })}
    </div>
  )
}

export default Buttons;