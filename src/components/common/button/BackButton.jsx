import React from 'react';

const BackButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-gray-500 text-white p-2">
      Back
    </button>
  );
};

export default BackButton;
