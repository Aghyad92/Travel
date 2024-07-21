import React from 'react'
import "./Home.css"
import Property1 from "./image/Property 1=Frame 1.jpg";
import Property2 from "./image/Property 1=Frame 79.png";
import Property3 from "./image/Property 1=Frame 80.jpg";
import Property4 from "./image/Property 1=Frame 81.jpg";
import poly from "./image/Polygon 3.svg"
import Discover from './Discover/Discover';
import Services from './Services/Services';
import Pay from './Pay/Pay';
import Footer from './Footer/Footer';
export default function Home() {
  return (
<>
   <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={Property1} class="d-block w-100 " alt="Property1"/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={Property2} class="d-block w-100 " alt="Property2"/>
    </div>
    <div class="carousel-item"data-bs-interval="2000">
      <img src={Property3} class="d-block w-100 " alt="Property3"/>
    </div>
    <div class="carousel-item"data-bs-interval="3000">
      <img src={Property4} class="d-block w-100 " alt="Property4"/>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon d-none" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon d-none" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div>
<h2 className='desplay-1 fw-bolder font-figtree fs-md-1  position-absolute start-50 translate-middle des '>
            Discover the Secrets<br />
            of the Earth !
          </h2 >
          <p className='para fw-bold '>
            Share your favorite travel destination and<br/>
          <span className='s'> we will feature it in our next blog!</span> 
          </p> 
          <button className='btn rounded bo btn-secondary'>shar your story</button>
          <button className='btn btn-secondary rounded-circle play position-absolute '><img src={poly} alt='poly' className='imd'/></button>
          <p className='position-absolute watch translate-middle fs-7 fw-bold '>Watch highlight</p>
          
       </div>
       <Discover/>
       <Services/>
       <Pay/>
       <Footer/>
      </> 
  )
}
