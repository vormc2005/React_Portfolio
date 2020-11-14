import React, {Component} from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import projects from "../../src/projects.json"
import PortfolioCard from "../components/PortfolioCard/portfoliocard";
import LazyLoad from 'react-lazyload'



class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        projects,
        search:""


    }
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
      
    });
  };

    render(){
  return ( 
  
        <>
      <Navbar/>
      <input type="text"
      className="input form-control filter"
      placeholder="Type app name or programming language..."
      type="text"
      onChange={this.handleInputChange}
      name="search"
      value={this.state.search}
      />
      
      <Wrapper> 
      {this.state.projects.filter(project => (project.name).toLowerCase().trim().includes(this.state.search.toLowerCase().trim()) || (project.technology).toLowerCase().includes(this.state.search.toLowerCase())).map(project => {
            return (
      
        <LazyLoad key={project.id} placeholder="Loading...">
          <PortfolioCard            
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            technology={project.technology}
            description={project.description}
            github = {project.github}
            Link ={project.Link}

            
          />
          </LazyLoad>
          
       
        
            )
        })}
      
         
          
                
      
     
      </Wrapper>
    
      <Footer/>
      </>

     
   
    
  );
    }
}

export default Portfolio;