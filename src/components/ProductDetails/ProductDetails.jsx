import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function ProductDetails() {
    const [productDetails,setProductDetails] = useState([]);
    const {productId} = useParams()
    useEffect(()=>{
        fetch("http://localhost:4000/products")
        .then (res=>res.json())
        .then (data=>{
            let result = data.find((item)=>{
                return item.id == productId
            })
            setProductDetails(result.product)
        })
    },[productId])
  return (
    <>  

        {productDetails.map((item)=>{
            return <li key={item.id}> Name: {item.name} <br /> Price:{item.price}</li>
        }     
        )}
    </>
  )
}
