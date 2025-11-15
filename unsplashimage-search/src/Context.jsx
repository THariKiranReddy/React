import { createContext, useState , useEffect } from "react";

export const AppContext = createContext();
const getDarkTheme = ()=>{
   const preferredMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
   const storeDarkMode = localStorage.getItem("darkTheme");
   if(storeDarkMode === null){
    return preferredMode;
   }
   return storeDarkMode === "true";
}
export const AppProvider = ({children})=>{
    const [isDarkTheme,setDarkTheme] = useState(getDarkTheme());
    const [searchTerm,setSearchTerm] = useState('cat');
    console.log(searchTerm);
    const toggleDarkTheme = ()=>{
        const newDarkTheme = !isDarkTheme;
        setDarkTheme(newDarkTheme);
        localStorage.setItem("darkTheme",newDarkTheme);
    };
    useEffect(()=>{
     document.body.classList.toggle('dark-theme',isDarkTheme);
    },[isDarkTheme]);

    return (
<AppContext.Provider value={{isDarkTheme,toggleDarkTheme,setSearchTerm,searchTerm}}>
    {children}
</AppContext.Provider>
    );
};