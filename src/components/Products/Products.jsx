import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Products() {
    // get API
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/products")
        .then (res=>res.json())
        .then (data=>{
            setProducts([...data])
        })
    },[])
  return (
    <>
        Products <br />
        {products.map((item)=>(
            <li key={item.id}>
                <Link to={`/products/${item.id}`}>name: {item.name}</Link>
            </li>
        ))}
        <Outlet></Outlet>
    </>
  )
}
