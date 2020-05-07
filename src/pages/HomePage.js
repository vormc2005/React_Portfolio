import React, {Component} from 'react';
import Navbar from "../components/Navbar/Navbar"
import Aboutme from "../components/Aboutme/ABoutme"
import Footer from '../components/Footer/Footer';
import Techcard from "../components/TechCard/Techcard"
import Parallax from "../components/Parallax/Parallax"
import projects from "../../src/projects.json"
import DemoCarousel from '../components/carousel/Carousel';



class HomePage extends Component {
  state ={
      projects
  }
  render(){
  return (
          <>
    
    
      <Navbar/>
      {/* <Parallax/> */}
     
      <Aboutme/>  
        <Parallax/>

          <Techcard/>          
            <Parallax/> 

          <DemoCarousel />           
          <Parallax/>  

      <Footer/>    
   
           </>
      );
   }
}

export default HomePage;