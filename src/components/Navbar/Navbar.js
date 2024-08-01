import React, { Component } from 'react'
import "./Navbar.css"
// import myImage from "../../../Images/1 (1).jpg"
// import Navbar from 'react-bootstrap/Navbar'
import {  Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom"
class NavbarComp extends Component {

  // componentDidMount(){
  //   const M = window.M;
  //   document.addEventListener('DOMContentLoaded', function() {
  //     var elems = document.querySelectorAll('.sidenav');
  //     var instances = M.Sidenav.init(elems,{});
  //   });
  // }


  render() {
    return (
      <div>
        <Navbar className="myNavBar" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Dmitry Voronov</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link className="Navlinks" to="/">About Me</Link>
      <Link className="Navlinks" to="/portfolio">My Portfolio</Link>
      <Link className="Navlinks" to="/contact">Contact Me</Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      </div>
    )
  }
}

export default NavbarComp
