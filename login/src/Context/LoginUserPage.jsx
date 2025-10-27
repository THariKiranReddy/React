import { createContext, useState } from "react";

export const LoginPage = createContext();

export const LoginUserPage = (props) => {
    const [isAuth,setIsAuth] =  useState({
        isAuth: false,
loading: false,
error: null,
token: ""

    });

    const login=async(email,password)=>{
        setIsAuth({...isAuth,loading:true,error:null});
        try{
          let res=await fetch("https://reqres.in/api/login",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
            });
            const data=await res.json();
            console.log(data);

            setIsAuth(res.ok && data.token ? {
                isAuth:true,
                loading:false,
                error:null,
                token:data.token
        } : {
                isAuth:false,
                loading:false,
                error:data.error,
                token:"" 
            }
            );
    }
        catch(error){
            console.log(error);
        }
    };
    const logout=()=>{
        setIsAuth({
             isAuth:false,
                loading:false,
                error:null,
                token:""
        });
    }
  return (
   <LoginPage.Provider value={{isAuth,login,logout}}>{props.children}</LoginPage.Provider>
  )
}

export default LoginUserPage