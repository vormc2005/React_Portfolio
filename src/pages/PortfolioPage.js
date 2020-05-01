import React, {Component} from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import projects from "../projects.json"
import Portfolio from "../components/PortfolioCard/portfolio"


class PortfolioPage extends Component {
    state ={
        projects
    }

    render(){
  return ( 
  
        <>
      <Navbar/>
      
      <Wrapper> 
           
      <Portfolio />
     
      </Wrapper>
    
      <Footer/>
      </>

     
   
    
  );
    }
}

export default PortfolioPage;