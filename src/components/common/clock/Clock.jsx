import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Clock = ({ position = 'middle' }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Determine the alignment class based on the position prop
  const alignmentClass = position === 'left' 
    ? 'text-left' 
    : position === 'right' 
    ? 'text-right' 
    : 'text-center';

  return (
    <div className={`text-lg ${alignmentClass}`}>
      {time.toLocaleTimeString()}
    </div>
  );
};

// Define prop types for validation
Clock.propTypes = {
  position: PropTypes.oneOf(['left', 'middle', 'right']), // Restrict position to specific values
};

// Define default props
Clock.defaultProps = {
  position: 'middle', // Default position is 'middle'
};

export default Clock;