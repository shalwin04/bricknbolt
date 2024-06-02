
import React from "react";
import ProjectsCarousel from "./ProjectsCarousel";

const OurProjects = () => {
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
      <h2 style={{ alignSelf: "flex-start", fontSize: "2rem", marginBottom: "0.5rem" }}>Our Projects</h2>
      <p style={{ alignSelf: "flex-start", fontSize: "1.2rem", marginBottom: "1rem" }}>
        From a couple to a large Indian family, we have houses built with emotions for everyone.
      </p>
      <div style={{ width: "100%" }}>
        <ProjectsCarousel />
      </div>
    </div>
  );
};

export default OurProjects;
