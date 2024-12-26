import React from 'react';

const ImageDetail = ({ description, userName }) => {
  return (
    <div>
      <h2>{description || 'No description available'}</h2>
      <p>By: {userName || 'Unknown'}</p>
    </div>
  );
};

export default ImageDetail;