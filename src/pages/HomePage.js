import React, {Component} from 'react';
import Navbar from "../components/Navbar/Navbar"
import Aboutme from "../components/Aboutme/ABoutme"
import Footer from '../components/Footer/Footer';
import Techcard from "../components/TechCard/Techcard"
import Parallax from "../components/Parallax/Parallax"
import Wrapper from "../components/Wrapper/Wrapper"
import projects from "../../src/projects.json"
import PortfolioCard from "../components/PortfolioCard/portfoliocard"



class HomePage extends Component {
  state ={
      projects
  }
  render(){
  return (
    <>
    
    
      <Navbar/>
      <Parallax/>
     
      <Aboutme/>   
      <Parallax/>
     
      <Techcard/>
      <Parallax/>
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
      <Parallax/>
     
      <Footer/>

 
     
   
  </>
  );
           }
}

export default HomePage;