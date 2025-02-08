import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaHandHoldingHeart, FaBabyCarriage, FaBriefcase } from 'react-icons/fa';
import './CommunityGroups.css';

const communityGroups = [
  { name: 'Local Meetups', icon: <FaUsers style={{ color: '#f874a9' }} />, members: 1250 },
  { name: 'Co-Parenting Support', icon: <FaHandHoldingHeart style={{ color: '#f874a9' }} />, members: 850 },
  { name: 'Babysitting Circles', icon: <FaBabyCarriage style={{ color: '#f874a9' }} />, members: 650 },
  { name: 'Career Support', icon: <FaBriefcase style={{ color: '#f874a9' }} />, members: 920 }
];

const CommunityGroups = () => {
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate('/coming-soon');
  };

  return (
    <section className="community-section">
      <h2 className="section-title">Community Groups</h2>
      <div className="groups-grid">
        {communityGroups.map((group, index) => (
          <div key={index} className="group-card">
            <div className="group-icon">{group.icon}</div>
            <h3 className="group-name">{group.name}</h3>
            <p className="group-members">{group.members} members</p>
            <button className="join-button" onClick={handleJoin}>
              Join Group
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityGroups;