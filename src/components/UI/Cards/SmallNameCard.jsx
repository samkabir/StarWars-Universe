import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useMultipleResourceData } from '../../../hooks/useMultipleResourceData';

const SmallNameCard = ({ resource, onClick }) => {
  return (
    <div 
      className="bg-gray-300 rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200 cursor-pointer min-w-[200px] flex-shrink-0"
      onClick={onClick}
    >
      <h3 className="font-semibold text-lg text-gray-800 text-center">
        {resource?.name && resource?.name !== 'Unknown' ? resource?.name : resource?.title}
      </h3>
    
    </div>
  );
};

const SmallNameCards = ({ resourceUrls, onresourceClick, title = "resources", resourceType }) => {
  const { resources, loading, error, refetch } = useMultipleResourceData(resourceUrls, resourceType);
  if (loading) {
    return (
      <div className="my-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <div className="flex justify-center py-8">
          <LoadingSpinner message="Loading resources..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <div className="text-center py-8">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={refetch}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!resources?.length) {
    return (
      <div className="my-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <p className="text-gray-600 text-center py-8">No resources found</p>
      </div>
    );
  }

  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-200">{title}</h2>
      <div className="flex flex-wrap gap-4 pb-4">
        {resources.map((resource) => (
          <SmallNameCard 
            key={resource.id} 
            resource={resource}
            onClick={() => onresourceClick(resource, resourceType)}
          />
        ))}
      </div>
    </div>
  );
};

export default SmallNameCards;