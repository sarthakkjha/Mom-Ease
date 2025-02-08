import React, { useState } from 'react';
import './FinanceSessionTypes.css'
import FinanceSessionCards from './FinanceCards';

const SessionTypes = () => {
    const [selectedSession, setSelectedSession] = useState(null);

    const handleSessionClick = (sessionType) => {
        setSelectedSession(sessionType);
    };

    return (
        <div>
            <div className="session-types-container">
                <div 
                    className={`session-option ${selectedSession === 'online' ? 'active' : ''}`}
                    onClick={() => handleSessionClick('online')}
                >
                    <div className="session-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 4a4 4 0 100 8 4 4 0 000-8zM6 14a3 3 0 00-3 3v2h18v-2a3 3 0 00-3-3H6z" stroke="#000" strokeWidth="1.5"/>
                        </svg>
                    </div>
                    <span className="session-label">Online<br />Sessions</span>
                </div>

                {/* <div 
                    className={`session-option ${selectedSession === 'offline' ? 'active' : ''}`}
                    onClick={() => handleSessionClick('offline')}
                >
                    <div className="session-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#000" strokeWidth="1.5"/>
                        </svg>
                    </div>
                    <span className="session-label">Offline<br />Meetups</span>
                </div>*/}
            </div> 
            {selectedSession && <FinanceSessionCards sessionType={selectedSession} />}
        </div>
    );
};

export default SessionTypes;