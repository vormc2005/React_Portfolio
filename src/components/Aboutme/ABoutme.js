import React, {Fragment} from 'react'
import "./Aboutme.css"
import myImage from "../../Images/1 (1).jpg"


const Aboutme =()=>{
   
        return (  
            <Fragment>
            
            <div className="row myinfo ">
             <div className="col-sm-8 offset-md-2" >
                 <div className="infocard  horizontal " id="infocard">                   
                        <img className="responsive-img" src={myImage} alt="My_image"/>                       
               
                    <div className="card-content aboutMe mt-4" >
                             <p>My name is Dmitry Voronov and I am an IT professional specializing in codding solutions. I build responsive dynamic web applications using Javascript, JQuery, ReactJS, Angular, NodeJS, JAVA, and Python. I am also proficient with MongoDB and MySQL. I graduated with bachelor's degrees from GMU and KubSTU. In addition, I completed a Full-stack codding certification at George Washington University. I have a passion for solving problems through analysis and codding. I enjoy creating solutions that make peoples' lives easier. I like learning new skills and pushing myself to new limits.

 
                             </p>   
                          
                            
                    </div>                       
                </div>
              </div>            
          </div>
            </Fragment>
        )
    }


export default Aboutme
