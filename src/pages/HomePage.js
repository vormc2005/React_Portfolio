import React from 'react';
import Navbar from "../components/Navbar/Navbar"
import Aboutme from "../components/Aboutme/ABoutme"
import Footer from '../components/Footer/Footer';
import Techcard from "../components/TechCard/Techcard"
import Parallax from "../components/Parallax/Parallax"
import Style from "./style.css"



function HomePage() {

  
  return (
    <>
    
    
      <Navbar/>
      <Parallax/>
     
      <Aboutme/>   
      <Parallax/>
     
      <Techcard/>
      <Parallax/>
     
      <Footer/>

 
     
   
  </>
  );
}

export default HomePage;