import React, {Component} from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';
import Wrapper from "../components/Wrapper/Wrapper"
import projects from "../../src/projects.json"
import PortfolioCard from "../components/PortfolioCard/portfoliocard"

class Portfolio extends Component {
    state ={
        projects
    }

    render(){
  return ( 
  
        <>
      <Navbar/>
      <Wrapper>       
      {this.state.projects.map( project=> (
        
          <PortfolioCard            
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            technology={project.technology}
            description={project.description}
            Link ={project.Link}
            
          />
          
        ))}        
      
     
      </Wrapper>
      {/* <Footer/> */}
      </>

     
   
    
  );
    }
}

export default Portfolio;