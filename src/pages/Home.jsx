import React, { useState } from 'react';
import { FaPhoneAlt,FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../images/Logo_Home.svg';
import backgroundImage from '../images/chennaiPlain.webp';
import AppointmentForm from './AppointmentForm'; 
import Services from './Services';
import WhyBricnBolt from './WhyBricknBolt';
import OurProjects from './OurProjects';
import { MdEmail } from 'react-icons/md';

const Home = () => {
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!locationDropdownOpen);
  };

  const toggleMoreDropdown = () => {
    setMoreDropdownOpen(!moreDropdownOpen);
  };

  const toggleAppointmentModal = () => {
    setAppointmentModalOpen(!appointmentModalOpen);
  };

  const linkStyle = {
    color: '#333',
    marginRight: '20px',
    textDecoration: 'none',
    transition: 'color 0.3s',
  };

  const linkHoverStyle = {
    color: '#FF5733',
  };

  return (
    <div>
      {/* Header */}
      <header style={{ 
        backgroundColor: '#fff', 
        color: '#333', 
        padding: '10px 20px', 
        height: '50px', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        position: 'fixed', 
        width: '100%', 
        top: 0, 
        zIndex: 1000 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          {/* Left Section */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Company Logo */}
            <div className="logo" style={{ marginRight: '20px' }}>
              <img src={Logo} alt="Company Logo" style={{ height: '40px' }} />
            </div>

            {/* Dropdown - Location */}
            <div
              style={{ position: 'relative', fontSize: '14px' }}
              onMouseEnter={toggleLocationDropdown}
              onMouseLeave={toggleLocationDropdown}
            >
              <button
                style={{
                  color: '#fff',
                  backgroundColor: '#FF5733', // Orange background
                  border: 'none',
                  cursor: 'pointer',
                  padding: '5px 10px',
                  fontSize: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                Location
                <span
                  style={{
                    marginLeft: '10px',
                    transition: 'transform 0.3s',
                    transform: locationDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  ▼
                </span>
              </button>
              {locationDropdownOpen && (
                <div style={{ position: 'absolute', top: '40px', left: '0', backgroundColor: '#fff', padding: '10px', borderRadius: '4px', zIndex: 1001 }}>
                  <p style={{ color: '#444', fontSize: '14px', margin: '0', cursor: 'pointer' }}>CHENNAI</p>
                  <p style={{ color: '#444', fontSize: '14px', margin: '0', cursor: 'pointer' }}>BANGALORE</p>
                  <p style={{ color: '#444', fontSize: '14px', margin: '0', cursor: 'pointer' }}>MUMUBAI</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a 
              href="#our-projects" 
              style={linkStyle} 
              onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
              onMouseOut={(e) => e.target.style.color = linkStyle.color}
            >
              Our Projects
            </a>
            <a 
              href="#floor-plans" 
              style={linkStyle} 
              onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
              onMouseOut={(e) => e.target.style.color = linkStyle.color}
            >
              Floor Plans
            </a>
            <a 
              href="#cost-estimator" 
              style={linkStyle} 
              onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
              onMouseOut={(e) => e.target.style.color = linkStyle.color}
            >
              Cost Estimator
            </a>
            <a 
              href="#how-it-works" 
              style={linkStyle} 
              onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
              onMouseOut={(e) => e.target.style.color = linkStyle.color}
            >
              How It Works
            </a>

            {/* Dropdown - More */}
            <div
              style={{ position: 'relative', fontSize: '16px' }}
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
                onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
                onMouseOut={(e) => e.target.style.color = linkStyle.color}
              >
                More
              </button>
              {moreDropdownOpen && (
                <div style={{ position: 'absolute', top: '40px', left: '0', backgroundColor: '#444', padding: '10px', borderRadius: '4px', zIndex: 1001 }}>
                  <a href="#lets-build" style={{ display: 'block', color: '#fff', fontSize: '14px', marginBottom: '8px', textDecoration: 'none' }}>Let's Build</a>
                  <p style={{ color: '#fff', fontSize: '14px' }}>Phone Number: +1234567890</p>
                </div>
              )}
            </div>

            {/* Appointment Button */}
            <button 
              style={{
                marginLeft: '20px',
                padding: '5px 10px',
                backgroundColor: '#FF5733',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={toggleAppointmentModal}
            >
              Let's Build 
            </button>

            {/* Phone Icon and Number */}
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
              <FaPhoneAlt style={{ color: '#FF5733', marginRight: '8px' }} />
              <span style={{ color: '#333' }}>+1234567890</span>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to account for fixed header */}
      <div style={{ height: '60px' }}></div>

      {/* Appointment Modal */}
      {appointmentModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1002
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '500px',
            width: '90%',
            position: 'relative'
          }}>
            <button onClick={toggleAppointmentModal} style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer'
            }}>✕</button>
            <AppointmentForm />
          </div>
        </div>
      )}

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
      <section>
        <WhyBricnBolt/>
      </section>
      <section>
        <OurProjects/>
      </section>
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px 10px'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        {/* Contact details */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ marginBottom: '5px', textAlign: 'center' }}>Contact Details</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fas fa-envelope mr-1"></i>
            <a
              href="mailto:info@gofilings.com"
              style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', marginRight: '10px' }}
            >
              <MdEmail className="mr-1" />
              info@deejos.com
            </a>
          </div>
        </div>
        {/* Center-aligned copyright */}
        <p style={{ flex: '1', fontSize: '14px', textAlign: 'center' }}>
          &copy; 2024 DEEJOS. All rights reserved.
        </p>
        {/* Right-aligned social media icons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ marginBottom: '5px', textAlign: 'center' }}>Follow us</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>
              <FaInstagram />
            </a>
            {/*<a href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>
              <FaXTwitter />
            </a>*/}
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
    
  );
};

export default Home;
