import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useMultipleResourceData } from '../../../hooks/useMultipleResourceData';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const SmallNameCard = ({ resource, onClick }) => {
  return (
    <div 
      className="bg-gray-300 rounded-lg shadow-md shadow-white hover:shadow-white p-4 border hover:bg-white border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-shadow transition duration-500 cursor-pointer min-w-[200px] flex-shrink-0 transition-transform"
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
        <ErrorMessage message={error} onRetry={refetch} />
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