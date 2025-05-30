import React, { useState } from 'react';

const CardPayment = ({ onSubmit }) => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(cardDetails);
  };

  return (
    <div>
      <h3>Enter Card Details</h3>
      <div>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Expiry Date:
          <input
            type="text"
            name="expiryDate"
            value={cardDetails.expiryDate}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          CVV:
          <input
            type="password"
            name="cvv"
            value={cardDetails.cvv}
            onChange={handleChange}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CardPayment;
