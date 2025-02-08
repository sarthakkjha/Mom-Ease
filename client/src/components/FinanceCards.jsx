import React from 'react';
import { useNavigate } from 'react-router-dom';
import financeSessionData from '../data/financeData';
import './FinanceCards.css';

const FinanceSessionCards = ({ sessionType }) => {
  const navigate = useNavigate();
  const data = financeSessionData;

  const handleCardClick = (finance) => {
    navigate('/finance-session-detail', { state: { finance } });
  };

  return (
    <div className="cards-container">
      {data.map((finance, index) => (
        <div 
          key={index} 
          className="workshop-card"
          onClick={() => handleCardClick(finance)}
        >
          <div className="image-container">
            <div className="card-image"></div>
          </div>
          <div className="card-content">
            <h3 className="card-title">{finance.title}</h3>
            <p className="card-date">{finance.date} | {finance.time}</p>
            <p className="card-quote">{finance.quote}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinanceSessionCards;