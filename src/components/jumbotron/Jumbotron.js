import React, {useEffect} from 'react'
import video from '../../Images/video(5).mp4'
import myImage from "../../Images/1 (1).jpg"
import "./style.css"


const Jumbotron = () => {

  

    return (

        <div class="jumbotron jumbotron-fluid">
          
            <video autoPlay muted loop >    
                <source src={video}  type="video/mp4" />
        
            </video> 

  <div className="container-fluid text-white">
  <img src={myImage} className="my-image" alt="my Img" />

    <h1 className="display-4">Welcome to Dmitry Voronov's portfolio site</h1>
    <p className="lead">Let me do the coding and develop apliction that fits your needs.</p>
    <hr className="my-4"></hr>
    <p>I build responsive and dynamic web applications using Javascript, JQuery, ReactJS, Angular, NodeJS, JAVA, and Python. 
     </p>     
    

  </div>
  
</div>

       
       
       
       
              
        
       
   
    )
}

export default Jumbotron
