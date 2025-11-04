import { createContext, useEffect, useState } from "react";

export const AuthContext =  createContext();

export const AuthContextProvider = ({children}) => {
    const [Auth,setAuth] = useState(false);
    const [userData,setUserData] = useState(null);
    const Login = async(data)=>{
        try{
             const res = await fetch('https://reqres.in/api/login',{
             method : 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)

        });
        const result = await res.json();
           console.log(result);
           if(res.ok){
            setAuth(true);
            setUserData(result);
            return true;
           }
           else{
            setAuth(false);
            return false;
           }
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <AuthContext.Provider value={{Auth , userData ,Login}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider