import React from 'react';
import './CTAButton.css';

const CTAButton = () => {
  return (
    <div className="cta-container">
      <p>Need personalized financial advice?</p>
      <button 
        className="cta-button"
        onClick={() => window.location.href = '/budget-ai'}
      >
        Try Our Budget Recommending AI
      </button>
    </div>
  );
};

export default CTAButton;