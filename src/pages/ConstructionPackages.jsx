import React from "react";

const ConstructionPackages = () => {
  return (
    <div
      className="home-construction-packages"
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
          Home Construction Packages
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "1rem",
            color: "#555",
          }}
        >
          Choose from our tailored construction packages.
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
    </div>
  );
};

export default ConstructionPackages;
