import React from "react";
import houseconstruction from "../images/img_houseconstruction.webp";
import commercial from "../images/commercial_thumbnail.webp";

const Services = () => {
  return (
    <div
      className="services"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem auto",
        width: "80%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        className="header"
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "0.5rem",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Services We Offer
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "1rem",
            color: "#555",
          }}
        >
          Flawless construction powered by deep expertise.
        </p>
        <hr
          style={{
            width: "50%",
            border: "none",
            height: "2px",
            backgroundColor: "orange",
            margin: "0 auto",
          }}
        />
      </div>
      <div
        className="service-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {[
          {
            src: houseconstruction,
            alt: "Residential Construction",
            description: "Residential Construction",
          },
          {
            src: commercial,
            alt: "Interior Design",
            description: "Interior Design",
          },
          {
            src: houseconstruction,
            alt: "Architectural Design",
            description: "Architectural Design",
          },
          {
            src: commercial,
            alt: "Commercial Construction",
            description: "Commercial Construction",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="service-image-wrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "1rem 0.5rem",
              width: "22%",
              border: "1px solid #ddd",
              overflow: "hidden",
              backgroundColor: "#000", // Black background
              color: "#fff", // White text
              position: "relative",
              borderBottom: "5px solid orange", // Add orange border
            }}
          >
            <div
              className="image-container"
              style={{
                width: "100%",
                height: "200px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={service.src}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  transition: "transform 0.3s ease",
                  objectFit: "cover",
                }}
                alt={service.alt}
                className="service-image"
              />
            </div>
            <div
              className="service-description"
              style={{
                padding: "1rem",
                textAlign: "center",
                backgroundColor: "#000",
                color: "#fff",
                width: "100%",
              }}
            >
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Adding the hover effect using CSS-in-JS
const styles = `
  .service-image-wrapper:hover .service-image {
    transform: scale(1.1);
  }
`;

const ServicesWithStyles = () => (
  <>
    <style>{styles}</style>
    <Services />
  </>
);

export default ServicesWithStyles;
