import React from 'react'

const Button = (props) => {
    const {addFunction,subFunction,doubFunction}=props;
  return (
    <div>
    <button onClick={addFunction}>+</button>
    <button onClick={subFunction}>-</button>
    <button onClick={doubFunction}>Double</button>
    </div>
  )
}

export default Button