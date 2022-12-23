import React from 'react'
import { Home } from './Pages/Home'
import { Product_list } from './Pages/Product_list'
import { Product } from './Pages/Product'
import { Register } from './Pages/Register'
import { Login } from './Pages/Login'
import { Cart } from './Pages/Cart'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
export default function App() {
  const user = true;
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/products/*",
    element: <Product_list/> ,
  },
  {
    path: "/product/*",
    element: <Product/>  ,
  },
  {
    path: "/sign",
    element: user? <Login/>: <Register/>,
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/cart",
    element: <Cart/> ,
  }
  
]);
  return (
    
    <>
    
      <RouterProvider router={router} />
      
    </>
  )
}
