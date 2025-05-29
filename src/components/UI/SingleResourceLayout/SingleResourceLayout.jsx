import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const SingleResourceLayout = ({ 
  resource, 
  resourceType, 
  loading, 
  error, 
  onRetry 
}) => {
  if (loading) {
    return <LoadingSpinner message="Loading resource..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={onRetry} />;
  }

  if (!resource) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Resource not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      
    </div>
  );
};

export default SingleResourceLayout;