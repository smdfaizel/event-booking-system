import React from 'react';

const Confirmation = ({ nextStep, prevStep, bookingDetails }) => {
  const handleNext = () => {
    nextStep();
  };

  return (
    <div>
      <h2>Confirm Your Booking</h2>
      <p>Date: {bookingDetails.date}</p>
      <p>Event: {bookingDetails.event}</p>
      <div className="mt-4">
        <button onClick={prevStep} className="bg-gray-500 text-white p-2 mr-2">
          Back
        </button>
        <button onClick={handleNext} className="bg-blue-500 text-white p-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirmation;