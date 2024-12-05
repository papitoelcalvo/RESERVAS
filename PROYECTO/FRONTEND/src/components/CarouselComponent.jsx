// src/components/CarouselComponent.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/CarouselComponent.css'
import avion from '../assets/avion.jpg'
import hotel from '../assets/hotel.jpg'
import primera from '../assets/primera.png'
import taxi from '../assets/taxi.jpg'


const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000} // Intervalo en milisegundos (10000ms = 10s)
    >
      <div className='carru'>
        <img src={avion} alt="Slide 1" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img src={hotel} alt="Slide 2" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img src={primera} alt="Slide 3" />
        <p className="legend">Slide 3</p>
      </div>
      <div>
        <img src={taxi} alt="Slide 3" />
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
