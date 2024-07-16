import React from 'react';

const AboutUs = () => {
  return (
    <div
      className="about-us-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2rem auto',
        width: '80%',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        className="card"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* "15 Years Experience" block */}
        <div
          className="experience"
          style={{
            flex: '1',
            textAlign: 'left',
            borderRight: '1px solid #ddd',
            padding: '20px',
            boxSizing: 'border-box',
          }}
        >
          <h2
            style={{
              fontSize: '7rem',
              color: 'orange',
              margin: '0',
              textTransform: 'uppercase',
            }}
          >
            15
          </h2>
          <h3
            style={{
              fontSize: '4rem',
              color: 'orange',
              margin: '0',
              textTransform: 'uppercase',
            }}
          >
            Years
          </h3>
          <p
            style={{
              fontSize: '2rem',
              color: '#333',
              margin: '0',
              textTransform: 'uppercase',
            }}
          >
            Experience
          </p>
        </div>
        <div
          className="welcome"
          style={{
            flex: '2',
            textAlign: 'left',
            borderRight: '1px solid #ddd',
            padding: '20px',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              color: 'orange',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            Welcome !
          </h2>
          <p
            style={{
              fontSize: '2.5rem',
              color: '#777',
              textTransform: 'uppercase',
              margin: '0',
            }}
          >
            Secret Success of
          </p>
          <p
            style={{
              fontSize: '2.5rem',
              color: '#333',
              textTransform: 'uppercase',
              margin: '0',
            }}
          >
            Our Project
          </p>
        </div>
        <div
          className="details"
          style={{
            flex: '3',
            padding: '20px',
          }}
        >
          <p
            style={{
              fontSize: '1.25rem',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            DEEJOS is an established and No.1 Construction Company in Chennai for Luxury residential house 
            construction having a strong team of young and experienced Civil Engineers, 
            Licensed Architects, Visualisers, Designers, Structural Engineers, Procurement 
            and Project Management Experts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
