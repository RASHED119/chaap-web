import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo2 from '../../../images/logo44.png';
import './Bannar.css';

const Bannar = () => {
  return (
    <div className="imgs">
      <Carousel variant="white">
        <Carousel.Item >
          <img
            className="d-block "
            src={logo2}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={logo2}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={logo2}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Bannar;