import React from 'react';
import EventCarousel from './EventCarousel';

const EventDetails = ({ eventType }) => {
  const renderContent = () => {
    switch (eventType) {
      case 'Concert':
        return <EventCarousel eventType="Concert" />;
      case 'Workshop':
        return (
          <div>
            <h3>Workshop Activities</h3>
            <ul>
              <li>Hands-on coding sessions</li>
              <li>Group discussions</li>
              <li>Networking opportunities</li>
            </ul>
          </div>
        );
      case 'Conference':
        return (
          <div>
            <h3>Conference Location Details</h3>
            <p>Venue: Grand Conference Hall</p>
            <p>Address: 123 Main Street, Cityville</p>
            <p>Date: June 15, 2025</p>
          </div>
        );
      default:
        return <p>Please select an event to see the details.</p>;
    }
  };

  return (
    <div style={{ width: '80%', margin: '5px', padding: '5rem', border: '1px solid #ccc' }}>
      {renderContent()}
    </div>
  );
};

export default EventDetails;