import React from 'react'
import "./Techcard.css"



const Techcard =()=>{
   
        return (  
            <>
            <div className="myinfo container-fluid">
             <div className="col s12 m7">
                 <div className="infocard card horizontal " id="infocard">
                    <div class="row">
                                              
                <div className="card-stacked">
                    <div className="card-content">
                        <div class=" col m4">
                                <p>My name is Dmitry Voronov. I am a full stack web developer. I build responsive   dynamic  web applications using Javascript, JQuery, React, NodeJS. I am also familiar with Mongo, MySQL, Express, Express-Handlebars. 
                                I obtained developer skills from George Washington Universitys' full stack developer certification course. In addition I have a degree in Finance from George Mason University, and Business Administration degree from NVCC. 
                                 Main reason why I like coding is that I like to solve problems for people. I like working with people. I like learning new skills and push myself to new limits.    
                                </p>
                                
                        </div>
                        <div class=" col m4">
                                <p>Before I chose web development, I managed sales operations at an automotive dealership. I spent 8 years managing and training staff, managing and marketing inventory, and creating great experience for my customers over and over again. WIth excellent work ethics skills that I developed throughout my automotive career and web development skills I learned at GW University I hope to make a great IT professional.                           
                                </p>
                                <button>
                                <a  href="/portfolio">My Portfolio</a>
                                </button>
                            </div>
                        <div class=" col m4">
                                <p>Before I chose web development, I managed sales operations at an automotive dealership. I spent 8 years managing and training staff, managing and marketing inventory, and creating great experience for my customers over and over again. WIth excellent work ethics skills that I developed throughout my automotive career and web development skills I learned at GW University I hope to make a great IT professional.                           
                                </p>

                        </div>
                    </div>                
                </div>
                    </div>
                </div>
              </div>            
          </div>
            </>
        )
    }


export default Techcard
