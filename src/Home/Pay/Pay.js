import React from 'react';
import p from "../image/amico.svg"
import "./pay.css"

export default function Pay() {
  return (
    <div className='d-flex justify-content-around flex-wrap pay pb-5'>
      <div className='d-flex mt-5 flex-column align-items-md-start align-items-sm-center'> 
            <h1 className='mb-5'>pay your all bills online</h1>
            <p className='fs-6'>for shopping, groceries, restaurants, movie tickets booking, flight tickets</p>
            <span className='to mb-5'>booking, rent, tuition, utilities, loans</span>
            <p className='mt-2 mb-5 fw-bold fs-4'>Simple, Fast & Safe</p>
            <div className=''>
                <a href='#' id='get' className='btn btn-dark rounded-5 '> Get our app</a>
                <a href='#' id='pay' className='btn btn-dark rounded-5 ms-2'> Pay online now</a>
            </div>
      </div>
      <div className='right'>
            <img src={p} alt='mobile' className='mt-5 photo5'/>
      </div>
    </div>
  )
}
