import React from 'react';
import Navbar from "../components/Navbar/Navbar"
import Aboutme from "../components/Aboutme/ABoutme"
import Footer from '../components/Footer/Footer';
import Techcard from "../components/TechCard/Techcard"


function HomePage() {
  return (
    <div className="App">
      <Navbar/>
      <Aboutme/>     
      <Techcard/>
      <Footer/>


     
    </div>
  );
}

export default HomePage;