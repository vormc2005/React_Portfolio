import React from 'react'
import "./Aboutme.css"
import myImage from "../../Images/1 (1).jpg"


const Aboutme =()=>{
   
        return (  
            <>
            
            <div className="myinfo container-fluid">
             <div className="col s12">
                 <div className="infocard card horizontal " id="infocard">
                    <div className="aboutMe">
                        <div className="image">
                            <img className="responsive-img" src={myImage} alt="My_image"/>
                        </div>
               
                    <div className="card-content aboutMe" id="aboutmeParagraphs">
                             <p>My name is Dmitry Voronov. I am a full stack web developer. I build responsive dynamic web applications using Javascript, JQuery, ReactJS, NodeJS. I am also familiar with Mongo, MySQL, Express, Express-Handlebars. I obtained developer skills from George Washington Universitys' full stack developer certification course. In addition, I have a degree in Finance from George Mason University, and Business Administration degree from NVCC. One of the reasons why I chose coding is that I like to solve problems and create solutions that make peoples' life easier. I like learning new skills and pushing myself to new limits. I enjoy working on applications in teams and alone. I am proficient in developing functional web applications using Javascript and ReactJS, as well as in styling web applications using CSS, Bootstrap and Materialize frameworks. 
 
                             </p>
                             
                        <br></br>
                        
                            {/* <p>
                            Before I chose web/software development, I managed sales operations at an automotive dealership. I spent 8 years managing and training staff, marketing inventory and creating great experience for my customers over and over again. There I have developed exceptional customer service skills, and gained years of management experience. Though I enjoyed my automotive career, I always wanted to be part of a technology field where I can apply my natural problem solving skills to solve problems of the society. 
                            Please feel free to review my portfolio and contact me if you need help with your web application. 

                           
                            </p> */}
                            
                    </div>                
                
                    </div>
                </div>
              </div>            
          </div>
            </>
        )
    }


export default Aboutme
