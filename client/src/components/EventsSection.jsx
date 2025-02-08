import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import './EventsSection.css';

const events = [
  {
    date: 'Aug 15',
    title: 'Single Moms Wellness Workshop',
    description: 'Join us for a day of self-care and empowerment',
    time: '10:00 AM',
    location: 'Community Center'
  },
  {
    date: 'Aug 20',
    title: 'Career Development Seminar',
    description: 'Learn about new career opportunities and networking',
    time: '2:00 PM',
    location: 'Online Zoom'
  },
  {
    date: 'Aug 25',
    title: 'Parenting Skills Workshop',
    description: 'Expert tips on managing work-life balance',
    time: '11:00 AM',
    location: 'Local Library'
  }
];

const EventsSection = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/coming-soon');
  };

  return (
    <section className="events-section">
      <h2 className="section-title">Upcoming Events</h2>
      <div className="events-carousel">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-date">
              <FaCalendarAlt />
              <span>{event.date}</span>
            </div>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <div className="event-details">
              <span>{event.time}</span>
              <span>{event.location}</span>
            </div>
            <button className="register-button" onClick={handleRegister}>
              Register
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;