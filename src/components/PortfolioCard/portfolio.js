import React, {Component} from 'react';
import Wrapper from "../Wrapper/Wrapper"
import projects from "../../projects.json"
import PortfolioCard from "./portfoliocard"


class Portfolio extends Component {
    state ={
        projects
    }

    render(){
  return ( 
  
        
      
      
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
   
    
      );
    }
}

export default Portfolio;