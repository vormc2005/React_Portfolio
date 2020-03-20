import React from "react";
import "./portfoliocard.css";


function PortfolioCard(props) {
  return (
    // <div className="contaner">
   
      
     
    <div className="card" id="projectCard">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Technology Used:</strong> {props.technology}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>
        <a href={props.Link} className="btn btn-primary cardBtn" id="projectlink">{props.name}
            </a>
            </div>
      </div>
      // </div>
           
       
   
  );
}

export default PortfolioCard;
