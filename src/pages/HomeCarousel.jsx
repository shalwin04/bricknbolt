import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carouselimage1 from '../images/homecarousel-img-1.webp';
import carouselimage2 from '../images/carouselimg-2.jpg';

const HomeCarousel = () => {
  const carouselItems = [
    {
      image: carouselimage1,
      description: 'High quality at reasonable price. We build buildings professionally.',
    },
    {
      image: carouselimage1,
      description: 'Your dream home is just a step away.',
    },
    {
      image: carouselimage1,
      description: 'Crafting spaces with precision and care.',
    },
    {
      image: carouselimage1,
      description: 'Innovative designs for modern living.',
    },
    {
      image: carouselimage1,
      description: 'Transforming visions into reality.',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselItemStyle = {
    position: 'relative',
    textAlign: 'center',
    color: '#fff',
  };

  const carouselImageStyle = {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
  };

  const carouselDescriptionStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    width: '80%',
  };

  const paragraphStyle = {
    fontSize: '3rem',  // Increase font size
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Helvetica, Arial, sans-serif',  // Set font to Helvetica
  };

  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [autoPlaySpeed, setAutoPlaySpeed] = useState(7000);  // Initial autoPlay speed

  const typingSpeed = 100;  // Typing speed in milliseconds
  const pauseTime = 2000;  // Pause time after typing in milliseconds
  const timeoutRef = useRef(null);

  useEffect(() => {
    let typingTimeout;
    if (typingIndex < carouselItems.length) {
      const currentText = carouselItems[typingIndex].description;
      const typeWriter = (text, i = 0) => {
        if (i < text.length) {
          setTypedText((prev) => prev + text.charAt(i));
          typingTimeout = setTimeout(() => typeWriter(text, i + 1), typingSpeed);
        } else {
          setTimeout(() => {
            setTypedText('');
            setTypingIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
          }, pauseTime);  // Pause before clearing and starting next description
        }
      };
      typeWriter(currentText);
    }

    // Calculate the total time needed for typing and pause
    const totalAutoPlaySpeed = carouselItems[typingIndex].description.length * typingSpeed + pauseTime;
    setAutoPlaySpeed(totalAutoPlaySpeed);

    return () => clearTimeout(typingTimeout);
  }, [typingIndex]);

  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={autoPlaySpeed} // Set dynamically based on typing speed and pause time
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {carouselItems.map((item, index) => (
        <div key={index} style={carouselItemStyle}>
          <img src={item.image} alt={`Carousel item ${index}`} style={carouselImageStyle} />
          <div style={carouselDescriptionStyle}>
            {typingIndex === index && <p style={paragraphStyle}>{typedText}</p>}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
