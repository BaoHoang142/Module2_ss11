import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [users,setUsers]=useState(
        {
            name:"",
            email:"",
            password:""
        }
    )
    // chuyển hướng đến trang khác
    const nav = useNavigate()
    // thêm giá trị nhập vào
    // phần body nhớ thêm trường "name"
    const handleChange =(e)=>{
        const {name,value} = e.target
        setUsers({...users,[name]:value})
    }
    // kiểm tra xem tồn tại hay chưa
    const Register = ()=>{
        fetch("http://localhost:4000/users")
        .then((res)=>{
            return res.json()
        })
        .then(data=>{
            let result = data.find((item)=>{
                return item.email == users.email
            })
            if (result) {
                alert("tài khoản đã tồn tại")
            }else{
                saveUser(users)
                alert("đăng ký thành công")
                nav("/login")
            }
        })
        .catch(err=>console.log("err",err))
    }
    // đẩy dữ liệu lên
    const saveUser = (user) => {
        fetch("http://localhost:4000/users",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
    }
  return (
    <>
        <div className='register'>
            <label htmlFor="">UserName</label>
            <input type="text" onChange={handleChange} name='name' /><br />
            <label htmlFor="">Email</label>
            <input type="text" onChange={handleChange} name='email' /><br />
            <label htmlFor="">Password</label>
            <input type="text" onChange={handleChange} name='password'/><br />
            <label htmlFor="">ConfirmPassword</label>
            <input type="text" onChange={handleChange} name='comfirmPassword'/><br />
            <button onClick={Register}>Register</button>
        </div>

        
    </>
  )
}
