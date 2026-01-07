import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoPostError, todoPostRequestAccess, todoPostSuccessAction} from '../action';
import axios from 'axios';
const TodoInput = () => {
    const [title,setTitle] = useState("");
    const dispatch = useDispatch();
    const postAdd = ()=>{
        dispatch(todoPostRequestAccess());
         const newTodo = {
        title: title,
    };
        axios.post('http://localhost:3000/posts',newTodo)
        .then((res)=>{
            dispatch(todoPostSuccessAction(res.data));
        })
        .catch((error)=>{
            console.log(error);
            dispatch(todoPostError());
        });
    };

    const handleAdd = ()=>{
        postAdd();
        setTitle("");
}
  return (
    <div>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={handleAdd}>AddTodo</button>
    </div>
  )
}

export default TodoInput