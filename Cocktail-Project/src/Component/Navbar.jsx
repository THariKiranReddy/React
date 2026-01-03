import React from 'react'
import { NavLink } from 'react-router-dom'
import StyledNav from "../assets/Wrapper/navbar"

const Navbar = () => {
  return (
    <StyledNav>
        <div className='nav-center'>
           <div className='logo'>Cocktail</div>
        <div className='nav-links'>
          <NavLink to = "/" className="nav-link">Home</NavLink>
        <NavLink to = "/about" className="nav-link">About</NavLink>
        <NavLink to = "/newsletter" className="nav-link">NewsLetter</NavLink>
        </div>
        </div>
    </StyledNav>
  )
}

export default Navbar