import React from 'react'
import mySites from './mySites.json'
import DemoCarousel from '../carousel/Carousel';

import "./Techcard.css"
import javaS from "../../Images/javascript.png"
import angular from "../../Images/angularjs.png"
import bootstrap from "../../Images/bootstrap.png"
import jquery from "../../Images/jquery.png"
import mongoDb from "../../Images/mongoDB.png"
import mysql from "../../Images/mysql.png"
import node from "../../Images/node.png"
import react from "../../Images/react.png"
import typescript from "../../Images/typescript.png"
import xml from "../../Images/xml.png"
import html from "../../Images/html.png"
import css from "../../Images/css.png"



const Techcard = () => {

   

    return (
        <>
                  
                    <div className="techcard"   id="techcard">                                                       
                     <div className="row">
                        <div className="col-md-12">
                           <h3 id="skillsheader">My Tech Stack and Solutions</h3>
                      </div>
                    </div>
            <div className="row" >           
                <div className="col-md-3 skill-div-left"  >
                    <p className="skillslist-left"
                        style={{ listStyleType: "disc" }}>
                        <span>
                            <img src={javaS} alt="javaS" style ={{maxHeight:"25px"}}/>
                        </span> JavaScript
                    </p>
                    <p className="skillslist-left"
                    style={{ listStyleType: "disc" }}> <span>
                            <img src={html} alt="html" style ={{maxHeight:"25px"}}/>
                        </span> HTML
                    </p>
                    <p className="skillslist-left"
                    style={{ listStyleType: "disc" }}> <span>
                            <img src={css} alt="css" style ={{maxHeight:"25px"}}/>
                        </span>CSS</p>
                    <p className="skillslist-left"
                    style={{ listStyleType: "disc" }}> <span>
                            <img src={node} alt="node" style ={{maxHeight:"25px"}}/>
                        </span> NodeJS</p>
                    <p className="skillslist-left"
                    style={{ listStyleType: "disc" }}> <span>
                            <img src={react} alt="react" style ={{maxHeight:"25px"}}/>
                        </span> ReactJS</p>
                    {/* <p className="skillslist-left" 
                    style={{ listStyleType: "disc" }}> <span>
                            <img src={mongoDb} alt="mongoDb" style ={{maxHeight:"25px"}}/>
                            <img src={react} alt="react" style ={{maxHeight:"25px"}}/>
                        </span> MERN stack application</p> */}
                        <p className="skillslist-left"
                        style={{ listStyleType: "disc" }}> <span>
                            <img src={jquery} alt="jquery" style ={{maxHeight:"25px"}}/>
                           
                        </span> Jquery</p>  
               
                </div>
                <div className="col-md-6" >
                    <div className="row" >
                {mySites.map(mysite=>{
                    return( 
                            <div className="col-md-6" style={{marginLeft:"0vh"}}>   
                                <div className="dark-bg">
                                    <p className="project-text">{mysite.type}</p>
                                </div>
                        </div> 
                        
                        )
                    })}
                    </div>
                    </div>
                {/* <div>
                    <div className="dark-bg">
                        <p className="project-text">Ecommerce applications</p>
                    </div>
                </div> */}
          
            
                <div className="col-md-3 skill-div-right">
                    <p className="skillslist-right" style={{ listStyleType: "disc" }}> <span>
                            <img src={angular} alt="angular" style ={{maxHeight:"25px"}}/>
                        </span> Angular 8</p>
                    <p className="skillslist-right"
                        style={{ listStyleType: "disc" }}>
                        <span>
                            <img src={typescript} alt="typescript" style ={{maxHeight:"25px"}}/>
                        </span> TypeScript</p>
                    <p className="skillslist-right"
                        style={{ listStyleType: "disc" }}>
                        <span>
                            <img src={xml} alt="xml" style ={{maxHeight:"25px"}}/>
                        </span> XML
                    </p>
                    <p className="skillslist-right"
                    style={{ listStyleType: "disc" }}> <span>
                            <img src={mongoDb} alt="mongoDb" style ={{maxHeight:"25px"}}/>
                        </span> MongoDB</p>
                    <p className="skillslist-right"
                    style={{ listStyleType: "disc" }}> <span>
                            <img src={mysql} alt="mysql" style ={{maxHeight:"25px"}}/>
                        </span> MySQL</p>
                    <p className="skillslist-right"
                    style={{ listStyleType: "disc" }}> <span>
                            <img src={bootstrap} alt="bootstrap" style ={{maxHeight:"25px"}}/>
                        </span> Bootstrap</p>                   
                </div>
            </div>        
        
                        
                        <div className="row">
                            <button className="btn btn-primary " id="techBtn">
                                <a id="myportfoliobtn" href="/portfolio">My Portfolio</a>
                            </button>
                        </div>
                        
                        <div className="mt-4">
                        <DemoCarousel/>
                        </div>

                    </div>
               
          
        </>
    )
}


export default Techcard
