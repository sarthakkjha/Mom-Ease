import React from 'react';
import Header from '../components/NetworkingHeader';
import CommunityGroups from '../components/CommunityGroups';
import ExpertSection from '../components/ExpertSection';
import EventsSection from '../components/EventsSection';
import EmergencySupport from '../components/EmergencySupport';
import './NetworkingHub.css';

const NetworkingHub = () => {
  return (
    <div className="networking-hub">
      <Header />
      <main className="main-content">
        <CommunityGroups />
        <ExpertSection />
        <EventsSection />
        <EmergencySupport />
      </main>
    </div>
  );
};

export default NetworkingHub;