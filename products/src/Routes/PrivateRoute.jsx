import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router';
const PrivateRoute = ({children}) => {
const {Auth} = useContext(AuthContext);
 if(!Auth){
   return <Navigate to='/login'/>
 }
 return children;
};

export default PrivateRoute