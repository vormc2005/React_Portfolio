import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css";
import './carousel.css'



import image1 from "./Images/bidbot.gif";
import image2 from './Images/Budget_App.gif';
import image3 from './Images/busybot.gif';
import image4 from './Images/Github_finder.gif';
import image5 from './Images/Pig_game.gif';
import image6 from './Images/Recipe_boss.gif';


 
class BootstrapCarousel extends Component {
    render() {
        return (
          <div className="aroundcarousel">
            <Carousel>
            <Carousel.Item>
              <img style={{maxheight:"520"}}
                className="d-block w-100"
                src={image1}
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>Bid Bot</h3>
                <p>Auction Application - E-comerce</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{maxheight:"520"}}
                className="d-block w-100"
                src={image2}
                alt="2 slide"
              />
          
              {/* <Carousel.Caption >
                <h3 >Budget Application</h3>
                <p >Calculate your budget</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{maxheight:"520"}}
                className="d-block w-100"
                src={image3}
                alt="Third slide"
              />
          
              {/* <Carousel.Caption>
                <h3>BusyBot</h3>
                <p>Find events near you</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{maxheight:"520"}}
                className="d-block w-100"
                src={image4}
                alt="4 slide"
              />
          
              {/* <Carousel.Caption>
                <h3>Github User Finder</h3>
                <p>Find git hub user</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{height:"300"}}
                className="d-block w-100"
                src={image5}
                alt="5th slide"
              />
          
              {/* <Carousel.Caption>
                <h3>Cassic Pig Game</h3>
                <p>Classic rool the dice game</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{maxheight:"520"}}
                className="d-block w-100"
                src={image6}
                alt="6th slide"
              />
          
              {/* <Carousel.Caption>
                <h3>Forkify</h3>
                <p>Search for recipes</p>
              </Carousel.Caption> */}
            </Carousel.Item>
           
          </Carousel>
          </div>
        
        );
    }
};
 
export default BootstrapCarousel