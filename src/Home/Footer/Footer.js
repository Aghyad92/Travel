import React from 'react'
import s1 from "../image/facebook 1.svg"
import s2 from "../image/pinterest 1.svg"
import s3 from "../image/instagram 1.svg"
import s4 from "../image/_x30_4.Twitter.svg"
import "./Footer.css"

export default function Footer() {
  return (
    
      <div className='pack bg-dark bg-gradient text-light fs-8 pt-5'>
      <div class="container">
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
         <div class="col d-flex flex-column bd-highlight">
            <h5>Menu</h5>
            <a href='#'>Home</a>
            <a href='#'>Explore</a>
            <a href='#'>Travel</a>
            <a href='#'>Blog</a>
            <a href='#'>Pricing</a>
         </div>
         <div class="col d-flex flex-column bd-highlight">
            <h5>Information</h5>
            <a href='#'>Destinations</a>
            <a href='#'>Supports</a>
            <a href='#'>Terms & Conditions</a>
            <a href='#'>Privacy</a>
         </div>
         <div class="col d-flex flex-column bd-highlight">
            <h5>Contact Info</h5>
            <span>+963 97555668</span>
            <span>ranem.omarr@gmail.com</span>
            <span>1245,Damascus, SY</span>
         </div>
         <div class="col d-flex flex-column bd-highlight gap-2">
            <h5>Follow us on</h5>
            <div className='d-flex gap-2 ml-1 box'>
            <img src={s1} alt='facebook' className='mark'/>
            <img src={s2} alt='pinterest' className='mark'/>
            <img src={s3} alt='instagram' className='mark'/>
            <img src={s4} alt='twitter' className='mark'/>
            </div>
         </div>
       </div>
      </div>
      <p className='mt-5 pb-3'>Copyright © Travel 2023 All rights reserved</p>
      </div>
    
  )
}
