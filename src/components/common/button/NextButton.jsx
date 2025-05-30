import React from 'react';

const NextButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2 ml-2">
      Next
    </button>
  );
};

export default NextButton;
