import React, { useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className={`faq-question ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        {answer}
      </div>
    </div>
  );
};

export default FAQItem;