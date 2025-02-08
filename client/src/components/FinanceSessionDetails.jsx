import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FinanceSessionDetails.css';

const FinanceSessionDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { finance } = location.state || {};

  if (!finance) return null;

  return (
    <div className="finance-detail-wrapper">
      <button className="detail-back-button" onClick={() => navigate(-1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="workshop-detail-container">
        <div className="video-container">
          <video 
            controls
            className="workshop-video"
            src={finance.videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="workshop-info">
          <div className="info-header">
            <h2 className="detail-title">{finance.title}</h2>
            <p className="session-time">{finance.date} | {finance.time}</p>
          </div>

          <div className="info-section">
            <h3 className="section-title">Speaker</h3>
            <p className="section-content">{finance.speaker}</p>
          </div>

          <div className="info-section">
            <h3 className="section-title">About Speaker</h3>
            <p className="section-content">{finance.aboutSpeaker}</p>
          </div>

          <div className="info-section">
            <h3 className="section-title">Learning Outcome</h3>
            <p className="section-content">{finance.learningOutcome}</p>
          </div>

          <p className="workshop-quote">{finance.quote}</p>
        </div>
      </div>
    </div>
  );
};

export default FinanceSessionDetail;