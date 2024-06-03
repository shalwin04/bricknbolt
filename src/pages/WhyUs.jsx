import React from "react";
import illustration from '../images/illustration-safemoney.svg'

const WhyUs = () => {
  return (
    <div
      className="whyus"
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
          Why Us?
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "1rem",
            color: "#555",
          }}
        >
          We ensure peace of mind, trust, and transparent services.
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

export default WhyUs;
