import React, { useContext } from 'react'
import { LoginPage } from '../Context/LoginUserPage'

const Dashboard = () => {
    const {isAuth,logout}=useContext(LoginPage);
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Token:{isAuth.token}</p>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard