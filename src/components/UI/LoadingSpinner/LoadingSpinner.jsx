import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => (
  <div className="flex justify-center items-center py-8">
    <div className="text-white">{message}</div>
  </div>
);

export default LoadingSpinner;