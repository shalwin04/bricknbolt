import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import illustration from "../images/illustration-safemoney.svg";

const WhyUs = () => {
  // Function to calculate the width of the text dynamically
  const calculateLineWidth = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "1.2rem Arial, sans-serif"; // Match the font and size of your text
    return context.measureText(text).width + "px";
  };

  // Text for the line width calculation
  const lineText =
    "Providing reliable solutions in Construction & Architecture.";
  const lineWidth = calculateLineWidth(lineText);

  // Array of reasons with icons split into two columns
  const reasonsLeft = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "green", fontSize: "2rem", marginRight: "10px" }}
        />
      ),
      text: "ONE-STOP SOLUTION.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "green", fontSize: "2rem", marginRight: "10px" }}
        />
      ),
      text: "HIGH TRANSPARENCY THROUGHOUT THE PROCESS.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "green", fontSize: "2rem", marginRight: "10px" }}
        />
      ),
      text: "ON-TIME PROJECT DELIVERY GUARANTEED.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "green", fontSize: "2rem", marginRight: "10px" }}
        />
      ),
      text: "DEDICATED SITE TEAM FOR PERSONALIZED SERVICE.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "green", fontSize: "2rem", marginRight: "10px" }}
        />
      ),
      text: "DECPOL APP FOR ENHANCED COMMUNICATION.",
    },
  ];

  const reasonsRight = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "green", fontSize: "2rem", marginRight: "10px" }}
        />
      ),
      text: "15 YEARS IN CONSTRUCTION & ARCHITECTURE.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "green", fontSize: "2rem", marginRight: "10px" }}
        />
      ),
      text: "CORE ARCHITECTURE SERVICES AVAILABLE.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "green", fontSize: "2rem", marginRight: "10px" }}
        />
      ),
      text: "475+ QUALITY CHECKS IMPLEMENTED.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "green", fontSize: "2rem", marginRight: "10px" }}
        />
      ),
      text: "TECH-DRIVEN PROJECT MANAGEMENT APPROACH.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "green", fontSize: "2rem", marginRight: "10px" }}
        />
      ),
      text: "PRICE MATCH GUARANTEE FOR COMPETITIVE PRICING.",
    },
  ];

  // Card component for each reason
  const ReasonCard = ({ icon, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div
        className="reason-card"
        style={{
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          transition: "transform 0.2s ease",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ marginRight: "15px" }}>{icon}</div>
        <p style={{ fontSize: "1.2rem", color: "#333", margin: "0" }}>{text}</p>
      </div>
    );
  };

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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginBottom: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "0.5rem",
            color: "#333",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Why Us?
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#555",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          {lineText}
        </p>
        <hr
          style={{
            width: lineWidth,
            borderTop: "2px solid orange",
            margin: "0",
            marginBottom: "1rem",
          }}
        />
      </div>

      {/* Reasons for choosing us */}
      <div
        className="reasons"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1", marginRight: "1rem" }}>
          {reasonsLeft.map((reason, index) => (
            <ReasonCard key={index} icon={reason.icon} text={reason.text} />
          ))}
        </div>
        <div style={{ flex: "1", marginLeft: "1rem" }}>
          {reasonsRight.map((reason, index) => (
            <ReasonCard key={index} icon={reason.icon} text={reason.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
