import React, {Fragment} from 'react'
import "./Aboutme.css"
import myImage from "../../Images/1 (1).jpg"


const Aboutme =()=>{
   
        return (  
            <Fragment>
            
            <div className="myinfo ">
             <div className="col-md-12">
                 <div className="infocard  horizontal " id="infocard">                   
                        <img className="responsive-img" src={myImage} alt="My_image"/>                       
               
                    <div className="card-content aboutMe mt-4" >
                             <p>I build responsive and dynamic web applications using Javascript, JQuery, ReactJS, Angular, NodeJS, JAVA, and Python. 
                             </p>                              
                    </div>                       
                </div>
              </div>            
          </div>
        </Fragment>
        )
    }


export default Aboutme
