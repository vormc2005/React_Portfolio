import React from 'react'
import "./Techcard.css"



const Techcard = () => {

    return (
        <>
            <div className="myinfo container-fluid">
                <div className="col s12 m6">
                    <div className="techcard card horizontal " id="techcard">
                        {/* <div className="row"> */}

                            <div className="card-stacked">
                                <div className="card-content">
                                    {/* <div className="col "> */}
                                        <div className="row">
                                            <div className="col-md-12">
                                            <h2  id="skillsheader">I am Experienced In:</h2>
                                             </div>                                         

                                        </div>
                                        

                                        <div className=" row">
                                            <div className="col">
                                            <ul className="skillslist" >
                                                <li style={{ listStyleType: "disc" }}>JavaScript</li>
                                                <li style={{ listStyleType: "disc" }}>HTML</li>
                                                <li style={{ listStyleType: "disc" }}>CSS</li>
                                                <li style={{ listStyleType: "disc" }}>NodeJS</li>
                                                <li style={{ listStyleType: "disc" }}>ReactJS</li>                                                
                                                <li style={{ listStyleType: "disc" }}>MongoDB</li>
                                                <li style={{ listStyleType: "disc" }}>MySQL</li>
                                                <li style={{ listStyleType: "disc" }}>Building MERN applications</li>
                                                <li style={{ listStyleType: "disc" }}>Multiple CSS frameworks</li>
                                            </ul>
                                            </div>

                                        
                                         <div className=" col ">
                                            <ul className="skillslist">
                                            <li style={{ listStyleType: "disc" }}>Local Storage</li>
                                                <li style={{ listStyleType: "disc" }}>Progressive Web Application</li>
                                                <li style={{ listStyleType: "disc" }}>IndexDB</li>
                                                <li style={{ listStyleType: "disc" }}>Express</li>
                                                <li style={{ listStyleType: "disc" }}>Express-Handlebars</li>
                                                <li style={{ listStyleType: "disc" }}>Axios</li>
                                                <li style={{ listStyleType: "disc" }}>Heroku</li>
                                                <li style={{ listStyleType: "disc" }}>Jira</li>
                                            </ul>
                                            
                                         </div>                          
                                     
                                        </div>                       
                                   
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="btn btn-primary " id="techBtn">
                                        <a id="myportfoliobtn" href="/portfolio">My Portfolio</a>
                                    </button> 
                            </div>
                      
                    </div>
                </div>
            </div>
        </>
    )
}


export default Techcard
