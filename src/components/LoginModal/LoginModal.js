import React, { useEffect, useState } from 'react'
import d1 from "../../Home/image/Frame 217.svg"
import "./LoginModel.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function LoginModal({closeModel}) {
    const[email,setEmail]=useState("")
    const[password,setpassword]=useState("")
    const history =useHistory();
    useEffect(()=>{
      if (localStorage.getItem('user-info')){
        history.push("/Booking")
      }
    },[])
    async function login(){
      let item ={email,password}
      let result =await fetch("https://khaledsukkar.pythonanywhere.com/api/login",{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          "Accept":'application/json'
        },
        body:JSON.stringify(item)
      });
      result=await result.json();
      localStorage.setItem("user-info",JSON.stringify(result))
      history.push("../../Booking")
    }
  return (
    <div className='model'>
     <div>
     <img src={d1} alt='x' className='exit' onClick={()=>{closeModel(false)}}/>
      </div>
      <div className='wel'>
        <p>Welcome to Log in</p>
        <p>No Account ?<br/>
            <a href='/'>Sign up</a>
        </p>
      </div>
      <form className='d-flex flex-column' >
     
        <label id='email' className='email'>Enter your username or email address</label>
        <input id='email' className='e' type='text' value={email} placeholder='Username or email address' onChange={(e)=>{setEmail(e.target.value)}} required />
        <label id='password' className='password'>Enter your Password</label>
        <input id='password' className='p' type='password' value={password} placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}} required />
        <div className='d-flex justify-content-around gap-5 mt-2'>
        <div>
        <input type='checkbox' id='rem' name='rem'/>
        <label className='reme'>Remember me</label>
        </div>
        <p>Forget password</p>
        </div>
        <button onClick={login} className='btn btn-dark b1'>Sign in</button>
      </form>
    </div>
  )
}
