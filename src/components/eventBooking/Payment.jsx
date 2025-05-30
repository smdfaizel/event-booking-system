import React, { useState } from 'react';
import UpiPayment from './paymentMethods/UpiPayment';
import CardPayment from './paymentMethods/CardPayment';
import NetBankingPayment from './paymentMethods/NetBankingPayment';

const Payment = ({ prevStep, bookingDetails }) => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = () => {
    alert('Payment Successful!');
  };

  const renderPaymentComponent = () => {
    switch (paymentMethod) {
      case 'UPI':
        return <UpiPayment />;
      case 'Cards':
        return <CardPayment />;
      case 'NetBanking':
        return <NetBankingPayment />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>Date: {bookingDetails.date}</p>
      <p>Event: {bookingDetails.event}</p>
      <div className="mt-4">
        <h3>Select Payment Method:</h3>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="UPI"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Cards"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cards
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="NetBanking"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            NetBanking
          </label>
        </div>
        <div className="mt-4">
          {renderPaymentComponent()}
        </div>
        <div className="mt-4">
          <button onClick={prevStep} className="bg-gray-500 text-white p-2 mr-2">
            Back
          </button>
          <button
            onClick={handlePayment}
            className="bg-green-500 text-white p-2"
            disabled={!paymentMethod}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;