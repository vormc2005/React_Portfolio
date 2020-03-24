import React from 'react'
import "./Aboutme.css"
import myImage from "../../Images/1 (1).jpg"


const Aboutme =()=>{
   
        return (  
            <>

            <div className="myinfo container-fluid">
             <div className="col s12 m7">
                 <div className="infocard card horizontal " id="infocard">
                    <div class="row">
                        <div className="card-image">
                            <img class="responsive-img" src={myImage} alt="My_image"/>
                        </div>
                <div className="card-stacked">
                    <div className="card-content">
                             <p>My name is Dmitry Voronov. I am a full stack web developer. I build responsive   dynamic  web applications using Javascript, JQuery, React, NodeJS. I am also familiar with Mongo, MySQL, Express, Express-Handlebars. 
                            I obtained developer skills from George Washington Universitys' full stack developer certification course. In addition, I have a degree in Finance from George Mason University, and Business Administration degree from NVCC. 
                        One of the reasons why I chose to learn codding is that I like to solve problems and create solutionsthat make peoples' life easier. I like learning new skills and push myself to new limits.</p>
                        
                            <p>Before I chose web development, I managed sales operations at an automotive dealership. I spent 8 years managing and training staff, managing and marketing inventory and creating great experience for my customers over and over again. With excellent work ethics skills that I developed throughout my automotive career and web development skills I learned at GW University I hope to make a great IT professional.

                           
                            </p>
                            
                    </div>                
                </div>
                    </div>
                </div>
              </div>            
          </div>
            </>
        )
    }


export default Aboutme
