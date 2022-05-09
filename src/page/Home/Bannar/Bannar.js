import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo2 from '../../../images/logo44.png';
import './Bannar.css';

const Bannar = () => {
    return (
        <div>
            <Carousel variant="white">
  <Carousel.Item>
    <img
      className="d-block img-fluid"
      src={logo2}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img-fluid"
      src={logo2}
      alt="Second slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
       className="d-block img-fluid item-center"
      src={logo2}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Bannar;