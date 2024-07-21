import { useState } from "react";
import "./Navbar.css"
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import LoginModal from "../LoginModal/LoginModal";
import Signup from "../Signup/Signup";

function NavbarT() {
  const [openModel,setOpenModel]=useState(false);
  const [openSign,setOpenSign]=useState(false);
  function openS(){
    setOpenModel(true);
    setOpenSign(false)
  }
  function openM(){
    setOpenSign(true);
    setOpenModel(false)
  }
  return (
    <Navbar collapseOnSelect expand='sm' bg='fffff' className=' nav-dark' variant='dark'>
      <NavbarToggle aria-controls='navbarScroll' data-bs-target='#navbarScroll' className="bg-dark"/>
      <NavbarCollapse id='navbarScroll' className='d-flex justify-content-center gap-22'>
        <Nav className='Navt d-none d-md-flex d-sm-block overflow-hidden'>
            <NavLink eventKey="1" as={Link} to="/" className='text-dark fw-bold'>Home</NavLink>
            <NavLink eventKey="2" as={Link} to="/About" className='text-dark fw-bold'>Services</NavLink>
            <NavLink eventKey="3" as={Link} to="/Content" className='text-dark fw-bold'>Booking</NavLink>
            <NavLink eventKey="4" as={Link} to="/Content" className='text-dark fw-bold'>Contact Us</NavLink>
            <NavLink eventKey="5" as={Link} to="/Content" className='text-dark fw-bold'>About Us</NavLink>
        </Nav>
      </NavbarCollapse>
      <div className="d-none d-md-block mr-5">
      <button className="btn btn-light rounded-pill m-2 " onClick={openM}>Sign Up</button>
      <button className="btn btn-dark rounded-pill mr-5 " onClick={openS}>Log In</button>
      {openModel && <LoginModal closeModel={setOpenModel} />}
      {openSign && <Signup closeSign={setOpenSign} />}
      </div>
    </Navbar>
  );
}

export default NavbarT;