import React from "react";
import illustration from "../images/illustration-safemoney.svg";

const Whyus = () => {
  return (
    <div
      className="services"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: "2rem auto",
        width: "80%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ alignSelf: "flex-start", fontSize: "2rem", marginBottom: "0.5rem" }}>
        Why DEEJOS ?
      </h2>
      <p style={{ alignSelf: "flex-start", fontSize: "1.2rem", marginBottom: "1rem" }}>
        We ensure peace of mind, trust, and transparent house construction services.
      </p>
      <div
        className="service-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {[{
          src: illustration,
          alt: 'One Stop Solution',
          description: 'One Stop Solution',
        }, {
          src: illustration,
          alt: '15 years in Construction & Architecture',
          description: '15 years in Construction & Architecture',
        }, {
          src: illustration,
          alt: 'One Stop Solution',
          description: 'One Stop Solution',
        }, {
          src: illustration,
          alt: '15 years in Construction & Architecture',
          description: '15 years in Construction & Architecture',
        }].map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{
              perspective: "1000px",
              margin: "1rem 0.5rem",
              width: "22%",
              height: "300px",
              position: "relative",
            }}
          >
            <div
              className="service-card-inner"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                textAlign: "center",
                transition: "transform 0.8s",
                transformStyle: "preserve-3d",
                border: "1px solid #ddd",
                borderBottom: "5px solid orange",
                backgroundColor: "#000",
                color: "#fff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotateY(180deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg)";
              }}
            >
              <div
                className="service-card-front"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={service.src}
                  alt={service.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <div
                  style={{
                    padding: "1rem",
                    width: "100%",
                  }}
                >
                  {service.description}
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                </div>
              </div>
              <div
                className="service-card-back"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  backgroundColor: "#000",
                  color: "#fff",
                  transform: "rotateY(180deg)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                <h3>{service.description}</h3>
                <p>Detailed description about {service.description}.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whyus;
