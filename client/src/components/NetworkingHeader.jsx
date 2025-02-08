import React, { useState } from 'react';
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa';
import './NetworkingHeader.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="header">
      <h1 className="title">Single Moms Network</h1>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search communities, events, or mentors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="nav-icons">
        <FaBell className="icon" />
        <FaEnvelope className="icon" />
      </div>
    </header>
  );
};

export default Header;