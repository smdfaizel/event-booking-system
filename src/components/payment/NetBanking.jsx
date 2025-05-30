import React from 'react';

const NetBanking = ({ banks, onSelectBank }) => {
  return (
    <div>
      <h3>Select Your Bank</h3>
      <ul>
        {banks.map((bank) => (
          <li key={bank.name}>
            <button onClick={() => onSelectBank(bank.url)}>{bank.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NetBanking;
