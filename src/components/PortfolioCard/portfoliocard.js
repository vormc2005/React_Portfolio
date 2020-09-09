import React from "react";
import "./portfoliocard.css";


function PortfolioCard(props) {
  return (
    // <div className="contaner">
   
      <>
    
    <div className="card" id="projectCard">
      <div className="img-container">
        <img className = "cardimg" alt={props.name} src={props.image} />
      </div>
     
        <div className="row">
          <div className="col-12 content">
              
                    <p>
                      <strong>Name:</strong> {props.name}
                    </p>
                    <p>
                      <strong>Technology Used:</strong> {props.technology}
                    </p>
                    <p>
                      <strong>Description:</strong> {props.description}
                    </p>
                    <p>
                    <a href={props.github} target="_blank" className="gitHubLink ">GitHub Link</a>
                    </p>
             
          </div>
        </div>
        <div className="row">
          <div className="col-12  projectBtn"> 
          <a href={props.Link} target="_blank">   
              <button href={props.Link}
                  className="btn btn-primary btn-block cardBtn  " 
                  id="projectlink">{props.name}
            </button>
            </a>   
        </div>
        </div>
           
      </div>
        </>
       
   
  );
}

export default PortfolioCard;
