import React, { useEffect, useState } from 'react'
import Home from '../Home/Home'
import "./Booking.css"


export default function Booking() {
  const [country,setCountry]=useState([])
  const [country1,setCountry2]=useState("Dubai")
  const [person,setPerson]=useState("2Adult")
  const [date,setDate]=useState("Depart Sun, 17th Sep 2020")
  const [date1,setDate1]=useState("Tue, 17th Oct 2020")

   useEffect(()=>{
    fetch("https://khaledsukkar.pythonanywhere.com/api/country/")
    .then(res =>{
      return res.json();
    })
    .then(data =>{
      setCountry(data)
    })
    .catch(err=>console.log(err))
   },[])

   const handleDes=()=>{
   
   }
  
  return (
    <div>
      <Home/>
      <div className='book'>
        <button className='b'>Book<br/>Now</button>
        <div>
          <label className='destination'>Destination</label>
          <p onClick={handleDes()} className='con1'>{country1}</p>
          <p className='con'>{country.map((con)=>(<p key={con.id} onClick={(e)=>setCountry2(e.currentTarget)}>{con.country_name}</p>)
           
          )}</p>
          
        </div>
        <div>
        <label>Person</label>
        <p className='con1'>{person}</p>
      </div>
      <div>
      <label>Depart</label>
      <p className='con2'>{date}</p>
      </div>
      <div>
      <label>Return</label>
      <p className='con1'>{date1}</p>
      </div>
    </div>
    </div>
  )
}
