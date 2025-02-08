import React from 'react';
import { useNavigate } from 'react-router-dom';
import { onlineWorkshopData, offlineWorkshopData } from '../data/workshopData';
import './WorkshopCards.css';

const WorkshopCards = ({ sessionType }) => {
  const navigate = useNavigate();
  const data = sessionType === 'online' ? onlineWorkshopData : offlineWorkshopData;

  const handleCardClick = (workshop) => {
    navigate('/workshop-detail', { state: { workshop } });
  };

  return (
    <div className="cards-container">
      {data.map((workshop, index) => (
        <div 
          key={index} 
          className="workshop-card"
          onClick={() => handleCardClick(workshop)}
        >
          <div className="image-container">
            <div className="card-image"></div>
          </div>
          <div className="card-content">
            <h3 className="card-title">{workshop.title}</h3>
            <p className="card-date">{workshop.date} | {workshop.time}</p>
            <p className="card-quote">{workshop.quote}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkshopCards;