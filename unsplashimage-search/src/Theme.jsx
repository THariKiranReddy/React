import React, { useContext } from 'react'
import { AppContext } from './Context'
import { BsFillSunFill } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import styles from './Theme.module.css'

const Theme = () => {
    const {isDarkTheme, toggleDarkTheme} = useContext(AppContext);
  return (
    <div className={styles.toggle}>
        <button onClick={toggleDarkTheme} className={styles.darkToggle}>
            {isDarkTheme ? <IoMoon className={styles.icon}/> :   <BsFillSunFill className={styles.icon}/>}
        </button>
    </div>
  )
}

export default Theme