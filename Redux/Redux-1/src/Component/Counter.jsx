import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addFunc, subFunction } from '../action';

const Counter = () => {
   const counter = useSelector((store)=>store.counter);
  const dispatch = useDispatch();

  const handleIncrease = ()=>{
    dispatch(addFunc(1));
  }
  const handleDecrease = ()=>{
   dispatch(subFunction(2));
  }
    return (
    <div>
      <h1>{counter}</h1>
     <button onClick={handleIncrease}>Increment</button>
     <button onClick={handleDecrease}>Decrement</button>
    </div>
  )
}

export default Counter