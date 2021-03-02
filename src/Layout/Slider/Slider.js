import React from 'react';
import { Button,Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="./Image/bannerweb.jpg"
                    alt="First slide"
                    />
          
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src="./Image/bannerwelcome.jpg"
                    alt="Second slide"
                    />
                   
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="./Image/bannerweb.jpg"
                    alt="First slide"
                    />
          
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src="./Image/bannerwelcome.jpg"
                    alt="Second slide"
                    />
                   
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
};

export default Slider;