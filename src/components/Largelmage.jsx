import React from 'react';

const Largelmage = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Large" style={{ width: '100%' }} />
    </div>
  );
};

export default Largelmage;