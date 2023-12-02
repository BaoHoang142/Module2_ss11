
import React, {lazy, Suspense} from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Products from './components/Products/Products'
import ProductDetails from './components/ProductDetails/ProductDetails'
export default function App() {
  const Lazy = lazy(()=>{
    return new Promise (resolve=>{
      setTimeout(()=> resolve(import("./components/ProductDetails/ProductDetails")),3000);
    })
  })
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}>
          <Route path=':productId' element={<ProductDetails></ProductDetails>}>
            
          </Route>
        </Route>
        <Route path='*' element={<Home></Home>}></Route>
      </Routes> 
    </>
  )
}
