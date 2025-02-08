import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search FAQs..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;