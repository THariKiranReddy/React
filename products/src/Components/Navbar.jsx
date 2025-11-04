import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../Components/Navbar.module.css';

const Navbar = () => {
    const links=[
    {path:"/login",text:"Login"},
      {path:"/" ,text:"Home"},
       {path:"/about",text:"About"},
      {path:"/contacts",text:"Contacts"},
      {path:"/products",text:"Products"}
    ]
  return (
    <div className={styles.navbar}>
        {
            links.map((link)=>{
                return <NavLink to={link.path} className={({isActive})=>{
                    return isActive? styles.active : styles.notActive;
                } }>
                    {link.text}
                </NavLink>
            })
        }
    </div>
  )
}

export default Navbar