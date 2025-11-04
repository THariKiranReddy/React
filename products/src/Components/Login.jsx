import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router';

const Login = () => {
  const {Auth,Login,userData} = useContext(AuthContext);
  const [redirect,setRedirect] = useState(false);
  const [formState,setFormState] = useState({
    email:"",
    password:""
  });
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormState({...formState,[name]:value});
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const success = await Login(formState);

   if (success) {
      setRedirect(true);
    } else {
      alert('Login failed');
    }
};
if (redirect) {
    return <Navigate to="/products" />;
  }
  return (
    <div style={{display:"flex", marginTop:"50px",justifyContent:"center"}}>
      <form action="submit"  onSubmit={handleSubmit} >
         <input type="email" placeholder='xyz@gmail.com' style={{backgroundColor:"lightblue"}} name="email" value={formState.email} onChange={handleChange}/>
         <br/>
         <input type="password" placeholder='Enter Password' style={{backgroundColor:"lightblue"}} name="password" value={formState.password} onChange={handleChange}/>
         <br/>
         <input style={{marginLeft:"55px",backgroundColor:"lightgrey",borderRadius:"4px"}} type="submit"/>
      </form>
    </div>
  )
}

export default Login


//  email: 'eve.holt@reqres.in',
//     password: 'cityslicka'