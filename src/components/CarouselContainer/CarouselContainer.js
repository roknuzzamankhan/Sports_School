import React from 'react';
import './CarouselContainer.css'
import { Carousel } from 'react-bootstrap';
import basketball from '../../images/basketball.jpg'
import football from '../../images/football.jpg'
import cycling from '../../images/cycling.jpg'

const CarouselContainer = () => {
  return (
    <Carousel className="carousel_container">
      <Carousel.Item interval={5000}>
        <img className="d-block w-100 carouselImg" src={basketball} alt="First slide"/>
        <Carousel.Caption>
          <h3>Basketball</h3>
          <p>We have basketball playground</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100 carouselImg" src={football} alt="Second slide"/>
        <Carousel.Caption>
          <h3>Football</h3>
          <p>We have football playground</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100 carouselImg" src={cycling} alt="Third slide"/>
        <Carousel.Caption>
          <h3>Cycling</h3>
          <p>We are training our students for cycling</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;