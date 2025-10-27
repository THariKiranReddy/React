import React, { useContext, useState } from 'react'
import { LoginPage } from '../Context/LoginUserPage'

const Login = () => {
    const [formState,setFormState] =useState({
        email:"",
        password:""
    });
    const {login,isAuth} =useContext(LoginPage);
    const handleChange=(event)=>{
        const {name,value}=event.target;
 setFormState({...formState,[name]:value});
    }
    const handleSubmit=(event)=>{
       event.preventDefault();
         login(formState.email, formState.password);
    }
  return (
    <div>
        <form action="submit" onSubmit={handleSubmit}>
            <input type="email" placeholder="email" name="email" value={formState.email} onChange={handleChange}/>
            <input type="password" placeholder='password' name="password" value={formState.password} onChange={handleChange}/>
            <input type="submit"/>
        </form>
        <div>
               {isAuth.loading && <p>Loading...</p>}
      {isAuth.error && <p style={{ color: "red" }}>{isAuth.error}</p>}
        </div>
    </div>
  )
}

export default Login