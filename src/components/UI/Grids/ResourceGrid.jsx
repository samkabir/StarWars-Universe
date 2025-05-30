import React from 'react';
import ResourceCard from '../Cards/ResourceCard';


const ResourceGrid = ({ 
  resources, 
  onResourceClick, 
  emptyMessage = "No items found",
  cardClassName = '',
  resourceType = 'people'
}) => {
  if (!resources || resources.length === 0) {
    return <p className="text-gray-500 text-center py-8">{emptyMessage}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 fade-in">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.uid}
          resource={resource}
          onClick={onResourceClick}
          className={cardClassName}
          resourceType={resourceType}
        />
      ))}
    </div>
  );
};

export default ResourceGrid;