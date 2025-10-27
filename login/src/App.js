import React, { useContext } from 'react'
import { LoginPage } from './Context/LoginUserPage'
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';

const App = () => {
  const {isAuth}=useContext(LoginPage);
  return (
    <div>
      {isAuth.isAuth ? <Dashboard/> : <Login/>}
    </div>
  )
}

export default App