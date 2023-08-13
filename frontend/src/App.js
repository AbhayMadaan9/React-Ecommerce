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
import { useSelector } from 'react-redux'
import Success from './Pages/Success'
import AdminHome from './admin_pages/home/AdminHome'
import UserList from './admin_pages/userList/UserList'
import User from './admin_pages/user/User'
import ProductList from './admin_pages/productList/ProductList'
import UpdateProduct from './admin_pages/product/UpdateProduct'
import NewProduct from './admin_pages/newProduct/NewProduct'
import NewUser from './admin_pages/newUser/NewUser'


export default function App() {
  const {islogin} = useSelector((state)=>state.user)

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
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/cart",
    element: <Cart/> ,
  },
  {
    path: "/success",
    element: <Success/> ,
  },
  {
    path: "/profile",
    element: <AdminHome/>,
  },
  {
    path: "/users",
    element: <UserList/> ,
  },
  {
    path: "/users/:_id",
    element: <User/> ,
  },
  {
    path: "/allproducts",
    element: <ProductList/>,
  },
  {
    path: "/products/:_id",
    element: <UpdateProduct/> ,
  },
  {
    path: "/newproduct",
    element: <NewProduct/> ,
  },
  {
    path: "/newUser",
    element: <NewUser/> ,
  },

  
]);
  return (
    
    <>
      <RouterProvider router={router} />
    </>
  )
}
