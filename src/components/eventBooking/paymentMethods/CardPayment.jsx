import React from 'react';

const CardPayment = () => {
  return (
    <div>
      <h4>Card Payment</h4>
      <p>Enter your card details:</p>
      <input type="text" placeholder="Card Number" className="border p-2 mb-2" />
      <input type="text" placeholder="Expiry Date" className="border p-2 mb-2" />
      <input type="text" placeholder="CVV" className="border p-2" />
    </div>
  );
};

export default CardPayment;
