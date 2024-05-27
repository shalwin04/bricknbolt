import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carouselimage1 from '../images/carouselimg-1.jpeg';
import carouselimage2 from '../images/carouselimg-2.jpg';

const ProjectsCarousel = () => {
  const carouselItems = [
    {
      image1: carouselimage1,
      image2: carouselimage2,
      description: 'Description for the first card',
    },
    {
      image1: carouselimage1,
      image2: carouselimage2,
      description: 'Description for the second card',
    },
    {
      image1: carouselimage1,
      image2: carouselimage2,
      description: 'Description for the third card',
    },
    {
      image1: carouselimage1,
      image2: carouselimage2,
      description: 'Description for the fourth card',
    },
    {
      image1: carouselimage1,
      image2: carouselimage2,
      description: 'Description for the fifth card',
    },
  ];

  const carouselCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '15px',
    backgroundColor: '#000', // Black background
    color: '#fff', // White text
    margin: '10px', // Reduced margin to decrease space between cards
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: '5px solid orange', // Orange border
  };

  const imagesContainerStyle = {
    display: 'flex',
    gap: '10px',
    marginBottom: '5px',
  };

  const carouselImageStyle = {
    width: '130px',
    height: '130px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease', // Hover effect
  };

  const descriptionStyle = {
    marginTop: '10px',
    fontSize: '14px',
    color: '#fff',
    maxWidth: '250px',
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <style>
        {`
          .carousel-image-wrapper:hover img {
            transform: scale(1.1);
          }
        `}
      </style>
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
          <div key={index} style={carouselCardStyle} className="carousel-image-wrapper">
            <div style={imagesContainerStyle}>
              <img
                src={item.image1}
                alt={`Image 1 for card ${index}`}
                style={carouselImageStyle}
              />
              <img
                src={item.image2}
                alt={`Image 2 for card ${index}`}
                style={carouselImageStyle}
              />
            </div>
            <p style={descriptionStyle}>{item.description}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ProjectsCarousel;
