import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./style.css"
import image1 from '../Images/bidbot.gif';
import image2 from '../Images/Github_finder.gif';
import image3 from '../Images/Recipe_boss.gif';
import image4 from '../Images/Budget_App.gif';
import image5 from '../Images/busybot.gif';
import image6 from '../Images/Piggame.gif';
// import image7 from '../Images/weather.gif'

 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={image1}  alt="1" />
                    <p className="legend">Auction - auction site application</p>
                </div>
                <div>
                    <img src={image2} alt="2" />
                    <p className="legend">GitHub - find github users, no login required</p>
                </div>
                <div>
                    <img src={image3} alt="
                    3" />
                    <p className="legend">Forkify - get your favorite recipe </p>
                </div>
                <div>
                    <img src={image4} alt="
                    4" />
                    <p className="legend">Budgt App - input your income and expenses and calculate your budget</p>
                </div>
                <div>
                    <img src={image5} alt="
                    5" />
                    <p className="legend">BusyBot - find events near you</p>
                </div>
                <div>
                    <img src={image6} alt="
                    6" />
                    <p className="legend">Pig Game - classic roll the dice game</p>
                </div>
                {/* <div>
                    <img src={image7} alt="
                    7" />
                    <p className="legend">Weather Service Application</p>
                </div> */}
            </Carousel>
        );
    }
};
 
export default DemoCarousel