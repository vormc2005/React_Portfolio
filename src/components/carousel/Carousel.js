import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css";
import './carousel.css'


 
class BootstrapCarousel extends Component {
    render() {
        return (
          <div className="container-fluid aroundcarousel">
            <Carousel>

            <Carousel.Item>
              <img style={{maxheight:"520"}}
                className="d-block w-100"
                src='./Images/bidbot.gif'
                alt="First slide"
              />            
            </Carousel.Item>

            <Carousel.Item>
              <img
                style={{maxheight:"520"}}
                className="d-block w-100"
                src='./Images/Budget_App.gif'
                alt="2 slide"
              />           
            </Carousel.Item>

            <Carousel.Item>
              <img
                style={{maxheight:"520"}}
                className="d-block w-100"
                src='./Images/busybot.gif'
                alt="Third slide"
              />              
            </Carousel.Item>

            <Carousel.Item>
              <img
                style={{maxheight:"520"}}
                className="d-block w-100"
                src='./Images/Github_finder.gif'
                alt="4 slide"
              />            
            </Carousel.Item>

            <Carousel.Item>
              <img
                style={{height:"300"}}
                className="d-block w-100"
                src='./Images/Pig_game.gif'
                alt="5th slide"
              />            
            </Carousel.Item>

            <Carousel.Item>
              <img
                style={{maxheight:"520"}}
                className="d-block w-100"
                src='./Images/Recipe_boss.gif'
                alt="6th slide"
              />           
            </Carousel.Item>
           
          </Carousel>
          </div>
        
        );
    }
};
 
export default BootstrapCarousel