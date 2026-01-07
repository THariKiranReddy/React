import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import TodoInput from './TodoInput';
import { todoError, todoRequestAccess, todoSuccessAction } from '../action';
import axios from 'axios';

const TodoList = () => {
    const {todo,isLoading,isError} = useSelector((store)=>store);
    const dispatch = useDispatch();
    const getTodo = ()=>{
        dispatch( todoRequestAccess());
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            dispatch(todoSuccessAction(res.data));
        }).catch((error)=>{
            console.log(error);
            dispatch(todoError());
        });
    }
    useEffect(()=>{
      getTodo()},[]);
  return (
    <div>
        <h1>Todo</h1>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error...</h1> }
      <TodoInput/>
      {todo.map((item)=>{
       return <div key={item.id}>{item.title}</div>
      })}
    </div>
  )
}

export default TodoList