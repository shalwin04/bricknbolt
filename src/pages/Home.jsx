import React, { useState } from 'react';
import Logo from '../images/Logo_Home.svg';
import backgroundImage from '../images/chennaiPlain.webp';
import AppointmentForm from './AppointmentForm'; // Import the AppointmentForm component
import Services from './Services';
import OurProjects from './OurProjects';

const Home = () => {
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!locationDropdownOpen);
  };

  const toggleMoreDropdown = () => {
    setMoreDropdownOpen(!moreDropdownOpen);
  };

  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: '#fff', color: '#333', padding: '20px 20px', height: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Company Logo */}
          <div className="logo">
            <img src={Logo} alt="Company Logo" style={{ height: '40px' }} />
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#our-projects" style={{ color: '#333', marginRight: '20px', textDecoration: 'none' }}>Our Projects</a>
            <a href="#floor-plans" style={{ color: '#333', marginRight: '20px', textDecoration: 'none' }}>Floor Plans</a>
            <a href="#cost-estimator" style={{ color: '#333', marginRight: '20px', textDecoration: 'none' }}>Cost Estimator</a>
            <a href="#how-it-works" style={{ color: '#333', marginRight: '20px', textDecoration: 'none' }}>How It Works</a>

            {/* Dropdown - Location */}
            <div
              style={{ position: 'relative', fontSize: '14px' }}
              onMouseEnter={toggleLocationDropdown}
              onMouseLeave={toggleLocationDropdown}
            >
              <button
                style={{
                  color: '#333',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  fontSize: 'inherit', // Use the same font size as other texts
                  marginRight: '20px' // Match spacing with other links
                }}
              >
                Location
              </button>
              {locationDropdownOpen && (
                <div style={{ position: 'absolute', top: '40px', left: '0', backgroundColor: '#444', padding: '10px', borderRadius: '4px' }}>
                  <p style={{ color: '#fff', fontSize: '14px' }}>Chennai</p>
                  <p style={{ color: '#fff', fontSize: '14px' }}>Bangalore</p>
                  <p style={{ color: '#fff', fontSize: '14px' }}>Mumbai</p>
                </div>
              )}
            </div>

            {/* Dropdown - More */}
            <div
              style={{ position: 'relative', fontSize: '14px' }}
              onMouseEnter={toggleMoreDropdown}
              onMouseLeave={toggleMoreDropdown}
            >
              <button
                style={{
                  color: '#333',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  fontSize: 'inherit', // Use the same font size as other texts
                }}
              >
                More
              </button>
              {moreDropdownOpen && (
                <div style={{ position: 'absolute', top: '40px', left: '0', backgroundColor: '#444', padding: '10px', borderRadius: '4px' }}>
                  <a href="#lets-build" style={{ display: 'block', color: '#fff', fontSize: '14px', marginBottom: '8px', textDecoration: 'none' }}>Let's Build</a>
                  <p style={{ color: '#fff', fontSize: '14px' }}>Phone Number: +1234567890</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Background */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '400px', marginTop: '20px', padding: '20px' }}>
        <img src={backgroundImage} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />

        {/* Appointment Form */}
        <div style={{ 
          position: 'absolute',
          top: '50%',
          right: '5%', // Adjust right positioning for gap
          transform: 'translateY(-50%)',
          maxWidth: '320px',
          width: '90%',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          zIndex: 1 // Ensure form appears in front of the image
        }}>
          <AppointmentForm /> {/* Render the AppointmentForm component */}
        </div>
      </div>
      <section>
            <Services/>
      </section>
      <OurProjects/>
    </div>
  );
};

export default Home;
