import React from 'react';
import QRCode from 'react-qr-code';

const UPIPayment = ({ upiId }) => {
  return (
    <div>
      <h3>Scan the QR Code to Pay</h3>
      <QRCode value={`upi://pay?pa=${upiId}`} />
      <p>UPI ID: {upiId}</p>
    </div>
  );
};

export default UPIPayment;
