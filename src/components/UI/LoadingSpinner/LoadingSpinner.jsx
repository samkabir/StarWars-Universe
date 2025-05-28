import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => (
  <div className="flex justify-center items-center py-8">
    <div className="text-gray-600">{message}</div>
  </div>
);

export default LoadingSpinner;