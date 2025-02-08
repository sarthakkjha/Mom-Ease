import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaGavel } from 'react-icons/fa';
import './EmergencySupport.css';

const EmergencySupport = () => {
  const navigate = useNavigate();

  const handleEmergencyClick = () => {
    navigate('/coming-soon');
  };

  return (
    <section className="emergency-support">
      <h2 className="support-title">Need Immediate Support?</h2>
      <div className="support-buttons">
        <button 
          className="emergency-button"
          onClick={handleEmergencyClick}
        >
          <FaPhone />
          <span>24/7 Crisis Helpline</span>
        </button>
        <button 
          className="emergency-button"
          onClick={handleEmergencyClick}
        >
          <FaGavel />
          <span>Legal Assistance</span>
        </button>
      </div>
      <p className="support-note">
        Our support team is available 24/7 to help you in crisis situations
      </p>
    </section>
  );
};

export default EmergencySupport;