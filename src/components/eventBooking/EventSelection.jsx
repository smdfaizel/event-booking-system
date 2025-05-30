import React, { useState } from 'react';
import EventDetails from './EventDetails';

const EventSelection = ({ nextStep, prevStep, updateBookingDetails }) => {
  const [selectedEvent, setSelectedEvent] = useState('');

  const handleNext = () => {
    updateBookingDetails('event', selectedEvent);
    nextStep();
  };

  return (
    <div>
      <h2>Select an Event</h2>
      <select
        value={selectedEvent}
        onChange={(e) => setSelectedEvent(e.target.value)}
        className="border p-2"
      >
        <option value="">Select an event</option>
        <option value="Concert">Concert</option>
        <option value="Workshop">Workshop</option>
        <option value="Conference">Conference</option>
      </select>

      {/* Display the EventDetails component based on the selected event */}
      {selectedEvent && <EventDetails eventType={selectedEvent} />}

      <div className="mt-4">
        <button onClick={prevStep} className="bg-gray-500 text-white p-2 mr-2">
          Back
        </button>
        <button onClick={handleNext} className="bg-blue-500 text-white p-2">
          Next
        </button>
      </div>
    </div>
  );
};

export default EventSelection;