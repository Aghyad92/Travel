import React from 'react'
import "./Discover.css"
import p1 from"../image/Iceland card image.jpg"
import p2 from"../image/Italy card image.jpg"
import p3 from"../image/Dubai card image.jpg"
import p4 from"../image/Patagonia Card Image.jpg"
import p5 from "../image/unsplash_go2Z8RFJGw4.svg"
import p6 from "../image/Map.png"
export default function Discover() {
  return (
    <>
    <div className='mt-4 mb-4'>
      <p>Join our adventures</p>
      <h1>Discover the world with us</h1>
    </div>

    <div className='container mb-5'>
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'> 
      <div className='col'>
      <img src={p1} alt="Iceland"/>
            <p className='fs-4 fw-bold'>Iceland</p>
            <p>Discover</p>
      </div>
      <div className='col'>
      <img src={p2} alt="Iceland"/>
            <p className='fs-4 fw-bold' >Italy</p>
            <p>Discover</p>
      </div>
      <div className='col'>
      <img src={p3} alt="Iceland"/>
            <p className='fs-4 fw-bold'>Dubai</p>
            <p>Discover</p>
      </div>
      <div className='col'>
      <img src={p4} alt="Iceland"/>
            <p className='fs-4 fw-bold'>Patagonia</p>
            <p>Discover</p>
      </div>
    </div>
    </div>
    <div className='s2 d-flex mt-5 overflow-hidden flex-sm-wrap flex-md-nowrap'>
        <div className='left'>
          <p className='ml-0 fs-4 fw-bold'>See what <span className='text-secondary'>travelers</span>,<br/> 
          says about us</p>
          <div className='cart p-4 d-flex justify-content-center align-items-center'>
              <img src={p5} alt='girl' className='photo p-1'/>
              <p className='mt-4'>“But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth.”

GINA AGASA,USA.</p>
          </div>
        </div>
        <div className='right'>
          <img src={p6} alt='map'/>
        </div>
    </div>
    </>
  )
}
