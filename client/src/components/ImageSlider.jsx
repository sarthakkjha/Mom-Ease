import React, { useState } from 'react';
import w1 from "../../images/w1.jpg";
import w7 from "../../images/w7.jpg";
import w3 from "../../images/w3.jpg";
import w8 from "../../images/w8.jpg";
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // Changed from 0 to false

  const slides = [
    {
      url: w1,
      title: 'Together we will learn.',
    },
    {
      url: w7,
      title: 'We got your back',
      // text: 'Experience the city vibes'
    },
    {
      url: w3,
      title: 'You are stronger than you think',
      text: 'Conquer new heights'
    },
    {
      url: w8,
      title: 'Nurturing You',
      text: 'Dive into the deep blue'
    }
  ];
  
  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentIndex ? 'active' : 'inactive'}`}
          >
            <img 
              src={slide.url}  // Changed from slide.image to slide.url
              alt={slide.title}
            />
            <div className="gradient-overlay" />
            <div className={`text-overlay ${isTransitioning ? 'transitioning' : ''}`}>
              <h2 className="slide-title">{slide.title}</h2>
              {slide.text && <p className="slide-description">{slide.text}</p>} {/* Changed from slide.description to slide.text and added conditional rendering */}
            </div>
          </div>
        ))}

        <button 
          className="arrow-button prev" 
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <svg 
            className="arrow-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          className="arrow-button next" 
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg 
            className="arrow-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;