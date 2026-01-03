import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router'

const HomeLayout = () => {
  return (
    <>
        <Navbar/>
        <section>
            <Outlet/>
        </section>
    </>
  )
}

export default HomeLayout