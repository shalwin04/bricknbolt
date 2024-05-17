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
        alignItems: "flex-start",
        margin: "2rem auto",
        width: "80%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ alignSelf: "flex-start" }}>Our Services</h2>
      <p style={{ alignSelf: "flex-start" }}>
        Flawless construction powered by deep expertise.
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
        <div
          className="service-image-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "1rem",
            width: "45%",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            src={houseconstruction}
            style={{ width: "100%", display: "block" }}
            alt="House Construction"
          />
          <div
            className="service-description"
            style={{
              padding: "1rem",
              textAlign: "center",
              fontWeight: "bold",
              backgroundColor: "#f8f8f8",
              width: "100%",
            }}
          >
            House Construction
          </div>
        </div>
        <div
          className="service-image-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "1rem",
            width: "45%",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            src={commercial}
            style={{ width: "100%", display: "block" }}
            alt="Commercial Construction"
          />
          <div
            className="service-description"
            style={{
              padding: "1rem",
              textAlign: "center",
              fontWeight: "bold",
              backgroundColor: "#f8f8f8",
              width: "100%",
            }}
          >
            Construction for Business
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
