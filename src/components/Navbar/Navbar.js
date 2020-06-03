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







        {/* <nav>
          <div className="nav-wrapper">
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <a href="/" className="brand-logo">Dmitry Voronov</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">About Me</a></li>
              <li><a href="/portfolio">My Portfolio</a></li>
              <li><a href="/contact">Contact Me</a></li>
            </ul>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <li><div className="user-view">
           
            <a href="#user"><img className="circle" src={myImage} /></a>
            <a href="#name"><span className="black-text name">Dmitry Voronov</span></a>
            <a href="#email"><span className="black-text email">voronov.dmitry@gmail.com</span></a>
          </div></li>
          <li><a href="/" className="waves-effect">About Me</a></li>
          <li><a href="/portfolio">My Portfolio</a></li>
          <li><a href="/contact">Contact Me</a></li>
          
        </ul> */}



      </div>
    )
  }
}

export default NavbarComp
