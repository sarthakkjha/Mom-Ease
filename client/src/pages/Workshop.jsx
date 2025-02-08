import React from 'react';
import Header from '../components/Header';
import SessionTypes from '../components/SessionTypes';
import './Workshop.css';

const Workshop = () => {
  return (
    <div className="workshop-wrapper">
      <div className="workshop-container">
        <Header title="Workshop"/>
        <SessionTypes />
      </div>
    </div>
  );
};

export default Workshop;