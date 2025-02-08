import React from 'react';
import Header from '../components/Header';
import FinanceSessionTypes from '../components/FinanceSessionTypes';

import './Workshop.css';

const Workshop = () => {
  return (
    <div className="workshop-wrapper">
      <div className="workshop-container">
        <Header title="Learn Finance"/>
        <FinanceSessionTypes />
      </div>
    </div>
  );
};

export default Workshop;