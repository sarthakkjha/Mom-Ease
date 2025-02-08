import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ title }) => {
    const navigate = useNavigate();
    // const location = useLocation();

    return (
        <div className="header-container">
            <h1 className="header-title">{title}</h1>
            <div 
                className="profile-circle" 
                onClick={() => navigate('/workshop')}
            ></div>
        </div>
    );
};

export default Header;