import React from 'react'
import "./Footer.css"



const Footer =()=>{
   
        return (  
            <div className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  
                  <div className="contactbuttons">
                  <a className="btn btn-primary contactBtn" href="https://github.com/vormc2005" role="button" target="_blank"><span
                      className="fab fa-github-square"></span></a>
                  <a className="btn btn-primary contactBtn" href="https://linkedin.com/in/dmitry-voronov-lets-work-happy" role="button" target="_blank"><span
                      className="fab fa-linkedin"></span></a>
                      <a className="btn btn-primary contactBtn" href="MAILTO: voronov.dmitry@gmail.com" method="POST" role="button" target="_blank"><span
                        className="fas fa-envelope"></span></a>
                  </div>
        
                </div>
              </div>
            </div>
        
          </div>
        )
    }


export default Footer

