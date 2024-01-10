// Carousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import hero1 from '../../images/carousal-1.jpg';
import hero2 from '../../images/carousal-2.jpg';
import hero3 from '../../images/carousal-3.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={hero1} alt="Hero 1" />
        </div>
        <div>
          <img src={hero2} alt="Hero 2" />
        </div>
        <div>
          <img src={hero3} alt="Hero 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
