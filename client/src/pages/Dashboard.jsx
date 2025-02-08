import React from 'react';
import Card from '../components/Card';
import './Dashboard.css';

const Dashboard = () => {
  const userData = {
    name: "Sarah",
    children: [
      { name: "Emma", age: 8 },
      { name: "Lucas", age: 5 }
    ],
    upcomingEvents: [
      { title: "Pottery Class", date: "Tomorrow, 2:00 PM", location: "Rajev Chowk, New Delhi" },
      { title: "Career Workshop", date: "Friday, 10:00 AM", location: "Pitampura, New Delhi" }
    ],
    wellnessScore: 75,
    financialGoals: {
      saved: 2500,
      target: 5000
    }
  };

  return (
    <div className="dashboard">
      <header className="header">
        <div className="header-content">
          <div>
            <h1>Welcome back, {userData.name}!</h1>
            <p>Let us make today count</p>
          </div>
          <button className="help-button">Need Help?</button>
        </div>
      </header>

      <div className="cards-grid">
        <Card title="Quick Actions">
          <div className="quick-actions">
            <button className="action-button">📅 Schedule pediatrician appointment</button>
            <button className="action-button">💰 Review monthly budget</button>
            <button className="action-button">📚 Check homework schedule</button>
          </div>
        </Card>

        <Card title="Upcoming Events">
          <div className="events-list">
            {userData.upcomingEvents.map((event, index) => (
              <div key={index} className="event-item">
                <div>
                  <p className="event-title">{event.title}</p>
                  <span className="event-date">{event.date}</span>
                  <span className="event-location">, {event.location}</span>
                </div>
                <button>Details</button>
              </div>
            ))}
          </div>
        </Card>
{/* 
        <Card title="Wellness Check">
          <div className="wellness-tracker">
            <div className="score-circle">
              <span>{userData.wellnessScore}%</span>
            </div>
            <p>You are doing great! Remember to take breaks.</p>
            <button>Talk to a counselor</button>
          </div>
        </Card> */}

        <Card title="Financial Goals">
          <div className="financial-goals">
            <div className="progress-bar">
              <div 
                className="progress"
                style={{ width: `${(userData.financialGoals.saved / userData.financialGoals.target) * 100}%` }}
              ></div>
            </div>
            <div className="goals-stats">
              <span>Saved: ${userData.financialGoals.saved}</span>
              <span>Target: ${userData.financialGoals.target}</span>
            </div>
          </div>
        </Card>

        <Card title="Community Support">
          <div className="community-support">
            <button>🤝 Join local single parents group</button>
            <button>👥 Find babysitting circle</button>
            <button>💝 Access support resources</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;