import React, { useEffect, useState } from 'react'
import d1 from "../../Home/image/Frame 217.svg"
import "./Signup.css"
export default function Signup({closeSign}) {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    const [password2,setpassword2]=useState("")
    const Submit=async(e)=>{
      e.preventDefault();
      const response =await fetch("https://khaledsukkar.pythonanywhere.com/api/signup",{
        method:'post',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(setName,setEmail,setpassword,setpassword2)
      }).catch(err=>{console.log(err.response.data)});
      const data =response.json();
      console.log(data);
      console.log(JSON.stringify(name,email,password))
    }
    
   
  return (
    <div className='model'>
      <div>
     <img src={d1} alt='x' className='exit' onClick={()=>{closeSign(false)}}/>
      </div>
      <div className='d-flax '>
        <h1>Registration </h1>
      <form onSubmit={Submit}>
      <div>
        <label id='name' className='name'>Enter your Name</label>
        <input id='name' className='n' type='text' value={name} placeholder='Username' onChange={(e)=>{setName(e.target.value)}} required />
        </div>
        <div>
        <label id='email' className='email2'>Enter your username or email address</label>
        <input id='email' className='e' type='text' value={email} placeholder='Username or email address' onChange={(e)=>{setEmail(e.target.value)}} required />
        </div>
        <div>
        <label id='password' className='password2'>Enter your Password</label>
        <input id='password' className='p' type='password' value={password} placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}} required />
        </div>
        <div className='agree'>
        <input type='checkbox' id='rem' name='rem'/>
        <label className='reme'>I agree to the terms & Conditions</label>
        </div>
        <button className='btn btn-dark b2'>Sign up</button>
      </form>
      </div>
      </div>
  )
}
