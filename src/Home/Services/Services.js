import React from 'react'
import "./Services.css"
import f1 from"../image/CarOutlined.svg"
import f2 from"../image/CheckCircleOutlined.svg"
import f3 from "../image/ContactsOutlined.svg"
import f4 from "../image/LikeOutlined.svg"

export default function Services() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center flex-sm-column ser'>
    <p className='display-5 fw-bold mt-5 mb-5'>What <span className='text-secondary'>services</span>, We Give You!</p>
        <div className='d-flex gap-4 flex-wrap'>
            <div className='one bg-secondary rounded-4 d-flex flex-column justify-content-center align-items-center'>
                <img src={f1} alt='car' className='pic mb-1'/>
                <p className='text-light w-50'>100+ tours around Rwanda</p>
            </div>
            <div className='two bg-secondary rounded-4 d-flex flex-column justify-content-center align-items-center'>
                <img src={f2} alt='CheckCircle' className='pic mb-1' />
                <p className='text-light w-50'>100% Trusted travel agency</p>
            </div>
            <div className='three bg-secondary rounded-4 d-flex flex-column justify-content-center align-items-center'>
                <img src={f3} alt='Contacts' className='pic mb-1'/>
                <p className='text-light w-50'>10 years of travel experience</p>
            </div>
            <div className='four bg-secondary rounded-4 d-flex flex-column justify-content-center align-items-center'>
                <img src={f4} alt='Like' className='pic mb-1'/>
                <p className='text-light w-50'>90% of travelors are happy</p>
            </div>
        </div>
    </div>
  )
}
