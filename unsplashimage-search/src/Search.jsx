import React, { useContext } from 'react'
import Styles from './Search.module.css'
import { AppContext } from './Context';

const Search = () => {
  const {setSearchTerm} = useContext(AppContext);
  const handleSubmit = (event)=>{
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    if(!searchValue) return;
    setSearchTerm(searchValue);
  }
  return (
    <form onSubmit={handleSubmit} className={Styles.formContainer}>
    <input type="text" placeholder='Search for images' name="search" className={Styles.searchInput.formInput}/>
    <button type="submit" className={Styles.btn}>Search</button>
    </form>
  )
}

export default Search