import React from 'react'
import "./Techcard.css"



const Techcard = () => {

    return (
        <>
            <div className="myinfo container-fluid">
                <div className="col s12 m6">
                    <div className="techcard card horizontal " id="techcard">
                        <div className="row">

                            <div className="card-stacked">
                                <div className="card-content">
                                    <div className="col m8">
                                        <div className="row">
                                            {/* <div className="col s8"> */}
                                            <h2 className="col s6" id="skillsheader">Technologies and languages that I have experience with</h2>
                                            {/* </div> */}

                                        </div>
                                        

                                        <div className=" col m6">
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
                                        <div className=" col m6">
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
                                            {/* <button className="btn btn-primary">
                                                <a id="myportfoliobtn" href="/portfolio">My Portfolio</a>
                                            </button> */}
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className=" col m4">
                                            <h2 id="skillsheader">Technologies and languages I am interested in</h2>
                                            <ul className="skillslist">
                                                <li style={{ listStyleType: "disc" }}>Python</li>
                                                <li style={{ listStyleType: "disc" }}>Java</li>
                                                <li style={{ listStyleType: "disc" }}>Ruby</li>
                                                <li style={{ listStyleType: "disc" }}>Any language that I need to work on AI</li>
                                            </ul>

                                        </div>
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
