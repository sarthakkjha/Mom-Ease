import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './WorkshopDetail.css';

const WorkshopDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { workshop } = location.state || {};

  if (!workshop) return null;

  return (
    <div className="workshop-detail-wrapper">
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
            src={workshop.videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="workshop-info">
          <div className="info-header">
            <h2 className="detail-title">{workshop.title}</h2>
            <p className="session-time">{workshop.date} | {workshop.time}</p>
          </div>

          <div className="info-section">
            <h3 className="section-title">Speaker</h3>
            <p className="section-content">{workshop.speaker}</p>
          </div>

          <div className="info-section">
            <h3 className="section-title">About Speaker</h3>
            <p className="section-content">{workshop.aboutSpeaker}</p>
          </div>

          <div className="info-section">
            <h3 className="section-title">Learning Outcome</h3>
            <p className="section-content">{workshop.learningOutcome}</p>
          </div>

          <p className="workshop-quote">{workshop.quote}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetail;