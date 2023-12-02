import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const nav = useNavigate()
    const inputValue = (e)=>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }
    const Login = ()=>{
        fetch("http://localhost:4000/users")
        .then(response => response.json()) 
            .then(data=> {                     
                let arr = data.find((item)=>{
                    return (item.email == user.email && item.password==user.password)
                })
                if (arr) {
                    alert("Đăng nhập thành công")
                    nav("/home")
                } else {
                    alert("Đăng nhập thất bại")
                }
            })
            .catch(err=>console.log("đăng nhập thất bại",err))
    }
  
  return (
    <>
        <div className='login'>
            <label htmlFor="">Email</label>
            <input type="text" onChange={inputValue} name='email'/>
            <label htmlFor="">Password</label>
            <input type="text" onChange={inputValue} name='password'/>
            <button onClick={Login}>Login</button>
        </div>
    
    </>
  )
}
