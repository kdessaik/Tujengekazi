import React from 'react'
//Navbar from Boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/Images/Logo.png'
import '../assets/css/main.css'
import videoDescription from '../assets/video/rain.mp4'





//Navbar from Boostrap 
export function Navigation() {
  return (
    
     
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> <img src={logo} alt="" className='logo' srcset="" /> Tujenge Kazi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Become a Seller</Nav.Link>
            
            <NavDropdown title="Explore" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Support Assistant
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='joinBtn'>
              Join
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    
  )
}
//Footer from boostrap

export function Footerbar(){
  return(
    <footer className="footer text-white text-center text-lg-start " >
    {/* <!-- Grid container --> */}
    <div className="container p-4">
      {/* <!--Grid row--> */}
      <div className="row">
        {/* <!--Grid column--> */}
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0 footerDescription">
          <h5 className="text-uppercase"><img src={logo} alt="" className='logo' srcset="" /> Tujenge Kazi</h5>
  
          <p>
          <b>Tujenge Kazi</b> connects skilled workers with job opportunities, fostering growth and empowerment. Our platform bridges employers and job seekers, promoting professionalism, teamwork, and economic development. Whether you're a craftsman, technician, or service provider, Tujenge Kazi helps you find meaningful work and build success.
          </p>
        </div>
        {/* <!--Grid column--> */}
  
        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">More info</h5>
  
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Contact</a>
            </li>
            <li>
              <a href="#!" className="text-white">Become client</a>
            </li>
            <li>
              <a href="#!" class="text-white">Assistant support</a>
            </li>
            <li>
              <a href="#!" className="text-white">Help!</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column-->
  
        <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0">Explore</h5>
  
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white">Sign-Up</a>
            </li>
            <li>
              <a href="#!" className="text-white">Login</a>
            </li>
            <li>
              <a href="#!" className="text-white">More info</a>
            </li>
            
            
          </ul>
        </div>
        {/* <!--Grid column--> */}
      </div>
      {/* <!--Grid row--> */}
    </div>
    {/* <!-- Grid container --> */}
  
    {/* <!-- Copyright --> */}
    <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
      © 2025 Copyright:
      <a className="text-white" href="https://Tujengekazi.org/">Tujengekazi.org</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>

  )

  

}

//section one in home page (description)


export function SectionOneDescription() {


  
  return (
    <div>
    {/* <!-- The video --> */}
<video autoPlay muted loop  className='videoDescription'>
  <source src={videoDescription} type="video/mp4"/>
</video>
    <div>
      
    </div>
    </div>
  )
}
