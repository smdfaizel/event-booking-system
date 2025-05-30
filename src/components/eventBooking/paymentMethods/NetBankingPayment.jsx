import React from 'react';

const NetBankingPayment = () => {
  return (
    <div>
      <h4>Net Banking Payment</h4>
      <p>Select your bank:</p>
      <select className="border p-2">
        <option value="Bank1">Bank 1</option>
        <option value="Bank2">Bank 2</option>
        <option value="Bank3">Bank 3</option>
      </select>
    </div>
  );
};

export default NetBankingPayment;
