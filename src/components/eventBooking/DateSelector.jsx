import React, { useState } from 'react';
import NextButton from '../common/button/NextButton';
import BackButton from '../common/button/BackButton';

const DateSelector = ({ nextStep, updateBookingDetails, previousStep }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleNext = () => {
    updateBookingDetails('date', selectedDate);
    nextStep();
  };

  return (
    <div>
      <h2>Select a Date</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border p-2"
      />
      <div className="flex mt-4">
        <BackButton onClick={previousStep} />
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
};

export default DateSelector;