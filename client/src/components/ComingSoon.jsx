import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="coming-soon">
      <h1>Coming Soon!</h1>
      <p>We're working hard to bring you this feature.</p>
      <button className="back-button" onClick={() => navigate('/')}>
        Go Back Home
      </button>
    </div>
  );
};

export default ComingSoon;