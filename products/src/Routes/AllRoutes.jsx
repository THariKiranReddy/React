import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Components/Home'
import Login from '../Components/Login'
import About from '../Components/About'
import Contacts from '../Components/Contacts'
import Products from '../Components/Products'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/products" element={
          <PrivateRoute>
             <Products/>
          </PrivateRoute>
           }/>
      </Routes>

  )
}

export default AllRoutes