import React from "react";
import ProjectsCarousel from "./ProjectsCarousel";

const OurProjects = () => {
  return (
    <div
      className="our-projects"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: "2rem auto",
        width: "80%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ alignSelf: "flex-start", marginBottom: "1rem" }}>Our Projects</h2>
      <p style={{ alignSelf: "flex-start", marginBottom: "2rem" }}>
        From a couple to a large Indian family, we have houses built with emotions for everyone.
      </p>
      <div style={{ width: "100%" }}>
        <ProjectsCarousel />
      </div>
    </div>
  );
};

export default OurProjects;
