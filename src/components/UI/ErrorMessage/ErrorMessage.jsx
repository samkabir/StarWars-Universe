import React from 'react';

const ErrorMessage = ({ message, onRetry }) => (
  <div className="text-red-600 text-center py-8">
    <p>Error: {message}</p>
    {onRetry && (
      <button 
        onClick={onRetry}
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Retry
      </button>
    )}
  </div>
);

export default ErrorMessage;