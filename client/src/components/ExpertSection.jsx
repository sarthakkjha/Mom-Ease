import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExpertSection.css';

const getRandomColor = () => {
  const colors = ['#FFB6C1', '#DDA0DD', '#E6E6FA', '#FFC0CB', '#FFE4E1'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const experts = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Family Counselor',
    rating: 4.8,
    backgroundColor: getRandomColor()
  },
  {
    name: 'Lisa Martinez',
    title: 'Career Coach',
    rating: 4.9,
    backgroundColor: getRandomColor()
  },
  {
    name: 'Jennifer Williams',
    title: 'Legal Advisor',
    rating: 4.7,
    backgroundColor: getRandomColor()
  }
];

const ExpertSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/coming-soon');
  };

  return (
    <section className="expert-section">
      <h2 className="section-title">Expert Help & Mentorship</h2>
      <div className="experts-grid">
        {experts.map((expert, index) => (
          <div key={index} className="expert-card">
            <div 
              className="expert-image-placeholder" 
              style={{ backgroundColor: expert.backgroundColor }}
            >
              <span>{expert.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="expert-info">
              <h3 className="expert-name">{expert.name}</h3>
              <p className="expert-title">{expert.title}</p>
              <div className="expert-rating">★ {expert.rating}</div>
              <button className="book-button" onClick={handleClick}>
                Book Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertSection;