import React, { useState } from 'react';

const AppointmentForm = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!fullName || !mobileNumber || !location) {
      alert('Please fill in all required fields.');
      return;
    }

    // Prepare form data
    const formData = {
      fullName,
      mobileNumber,
      location
    };

    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);

    // Clear form fields after submission
    setFullName('');
    setMobileNumber('');
    setLocation('');
  };

  return (
    <div style={{ 
      maxWidth: '320px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>
        Book FREE Appointment
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName" style={{ marginBottom: '8px', color: '#333', fontSize: '14px', fontWeight: 'bold' }}>
          Full Name*
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={{ marginBottom: '16px', padding: '8px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          required
        />

        <label htmlFor="mobileNumber" style={{ marginBottom: '8px', color: '#333', fontSize: '14px', fontWeight: 'bold' }}>
          Mobile Number*
        </label>
        <input
          type="tel"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          style={{ marginBottom: '16px', padding: '8px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          required
        />

        <label htmlFor="location" style={{ marginBottom: '8px', color: '#333', fontSize: '14px', fontWeight: 'bold' }}>
          Location of your plot*
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ marginBottom: '16px', padding: '8px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          required
        />

        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            width: '100%',
            cursor: 'pointer'
          }}
        >
          Start Your Construction
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '12px', color: '#666', fontSize: '12px' }}>
        By submitting this form, I confirm that I have read and agreed to accept Brick&Bolt's privacy policy.
      </p>
    </div>
  );
};

export default AppointmentForm;
