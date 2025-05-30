import React, { useState } from 'react';
import DateSelector from './DateSelector';
import EventSelection from './EventSelection';
import Confirmation from './Confirmation';
import Payment from './Payment';

const EventBooking = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    event: '',
    confirmation: false,
    paymentStatus: false,
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const updateBookingDetails = (key, value) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {step === 1 && <DateSelector nextStep={nextStep} updateBookingDetails={updateBookingDetails} />}
      {step === 2 && <EventSelection nextStep={nextStep} prevStep={prevStep} updateBookingDetails={updateBookingDetails} />}
      {step === 3 && <Confirmation nextStep={nextStep} prevStep={prevStep} bookingDetails={bookingDetails} />}
      {step === 4 && <Payment prevStep={prevStep} bookingDetails={bookingDetails} />}
    </div>
  );
};

export default EventBooking;