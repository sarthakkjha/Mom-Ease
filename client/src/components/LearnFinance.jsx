import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LearnFinance.css';

const FinanceCard = ({ title, outcomes, date, time, quote, image }) => (
  <div className="card">
    <div className="card-content">
      <div className="image-container">
        {image ? (
          <img src={image} alt={title} className="course-image" />
        ) : (
          <div className="placeholder-image" />
        )}
      </div>
      <div className="text-container">
        <h3 className="card-title">{title}</h3>
        {outcomes && (
          <p className="card-text">
            Learning Outcome: {outcomes}
          </p>
        )}
        {date && <p className="card-text">Date: {date}</p>}
        {time && <p className="card-text">Time: {time}</p>}
        {quote && <p className="highlight">{quote}</p>}
      </div>
    </div>
  </div>
);

const LearnFinance = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'Finance Discussion',
      outcomes: 'Understanding basic financial concepts',
      date: 'Feb 15, 2025',
      time: '10:00 AM',
      quote: "Let's learn finance together",
      image: '/assets/finance-discussion.png'
    },
    {
      id: 2,
      title: 'Loans Knowledge',
      outcomes: 'Master loan types and terms',
      date: 'Feb 20, 2025',
      quote: "Make loans easy",
      image: '/assets/loans.png'
    },
    {
      id: 3,
      title: 'Investment Basics',
      outcomes: 'Learn investment strategies',
      date: 'Feb 25, 2025',
      quote: "Start your investment journey",
      image: '/assets/investment.png'
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <button 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <img 
            src="/assets/back-arrow.png"
            alt="Back"
            className="back-arrow"
          />
        </button>
        <h1 className="title">Learn Finance</h1>
        <button 
          className="profile-button"
          onClick={() => navigate('/profile')}
        >
          <img 
            src="/assets/profile.png"
            alt="Profile"
            className="profile-image"
          />
        </button>
      </header>

      <div className="scroll-container">
        {courses.map(course => (
          <FinanceCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default LearnFinance;