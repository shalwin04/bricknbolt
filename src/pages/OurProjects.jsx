import React, { useState } from "react";
import carouselimg from "../images/carouselimg-1.jpeg";
import chennaiPlain from "../images/chennaiPlain.webp";
import homecarousel from "../images/homecarousel-img-1.webp";

const Modal = ({ show, onClose, src }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className="modal"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <img
        src={src}
        alt="Full Size"
        style={{
          maxHeight: "90%",
          maxWidth: "90%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  );
};

const OurProjects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div
      className="our-projects"
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
          Our Projects
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "1rem",
            color: "#555",
          }}
        >
          From a couple to a large Indian family, we have houses built with emotions for everyone.
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
        className="project-container"
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Ensure four images per row
          gap: "1rem",
        }}
      >
        {[carouselimg, chennaiPlain, homecarousel, carouselimg, carouselimg, chennaiPlain, homecarousel, carouselimg, carouselimg, chennaiPlain, homecarousel, carouselimg].map((src, index) => (
          <div
            key={index}
            className="image-wrapper"
            style={{
              overflow: "hidden",
              width: "100%",
              height: "200px", // Set a fixed height for all images
              position: "relative",
              cursor: "pointer", // Add pointer cursor on hover
            }}
            onClick={() => handleImageClick(src)}
          >
            <img
              src={src}
              alt={`Project ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              className="project-image"
            />
          </div>
        ))}
      </div>
      <style>
        {`
          .image-wrapper:hover .project-image {
            transform: scale(0.9); /* Zoom out effect */
          }
        `}
      </style>
      <Modal show={modalOpen} onClose={handleCloseModal} src={selectedImage} />
    </div>
  );
};

export default OurProjects;
