import React from 'react';
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

  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {carouselItems.map((item, index) => (
        <div key={index} style={{ position: 'relative', textAlign: 'center', color: '#fff' }}>
          <img src={item.image} alt={`Carousel item ${index}`} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(0, 0, 0, 0)', padding: '10px 20px', borderRadius: '10px', textAlign: 'center', width: '80%', animation: 'slideUp 0.5s ease-out' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;