import React, { useState, useEffect } from 'react';
import './Carousel.css';
import img2 from "../assets/img/1.1.jpg";
import img3 from "../assets/img/2.2.jpg";
import img4 from "../assets/img/mainvideo.webp";
import img1 from "../assets/img/free.jpeg";

const images = [
  img1,
  img4,
  // img2,
  img3,
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${currentIndex === index ? 'active transition-all' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
