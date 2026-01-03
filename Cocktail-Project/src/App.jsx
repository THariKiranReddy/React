import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from './Pages/HomeLayout';
import About from './Pages/About';
import NewsLetter from './Pages/NewsLetter';
import Cocktail from './Pages/Cocktail';
import Error from './Pages/Error';
import Landing from './Pages/Landing';
import { loader as landingLoader }  from './Pages/Landing';
import LandingPageError from './Pages/LandingPageError';
import { loader as cocktailLoader } from './Pages/Cocktail';
import { action as newletterAction } from './Pages/NewsLetter';
const router = createBrowserRouter([
    {
      path:"/",
      element:<HomeLayout/>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element:<Landing/>,
          loader:landingLoader,
          errorElement:<LandingPageError/>
        },
        {
          path:"about",
          element:<About/>,
        },
        {
          path:"cocktail/:id",
          element:<Cocktail/>,
          loader:cocktailLoader
        },
        {
          path:"newsletter",
          element:<NewsLetter/>,
          action: newletterAction
        },
        {
          path:"error",
          element:<Error/>
        }
      ]
    }
  ]);
const App = () => {
  return (
  <RouterProvider router={router}/>
  )
}

export default App