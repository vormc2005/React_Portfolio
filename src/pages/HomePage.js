import React from 'react';
import Navbar from "../components/Navbar/Navbar"
import Aboutme from "../components/Aboutme/ABoutme"
import Footer from '../components/Footer/Footer';
import Techcard from "../components/TechCard/Techcard"
import Parallax from "../components/Parallax/Parallax"
import Portfolio from '../components/PortfolioCard/portfolio';



const HomePage =()=> {
 
  
  return (
    <>    
    
      <Navbar/>
      {/* <Parallax/> */}
     
      <Aboutme/> 

      <Parallax/>     
      <Techcard/>
      <Parallax/>

      <Portfolio />
      <Parallax/>

      <Footer/>     
   
  </>
  );
           
}

export default HomePage;