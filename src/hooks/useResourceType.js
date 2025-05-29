import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useResourceType = () => {
  const location = useLocation();
  
  const resourceType = useMemo(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    return pathSegments[0] || null;
  }, [location.pathname]);

  return resourceType;
};

import React from 'react';
import SingleCharacter from '../../Pages/SingleCharacter';

const RESOURCE_COMPONENTS = {
  people: SingleCharacter,
};

const ResourceRenderer = ({ resourceType, resource }) => {
  const Component = RESOURCE_COMPONENTS[resourceType];

  if (!Component) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">
          No component available for resource type: {resourceType}
        </p>
      </div>
    );
  }

  return <Component singleResource={resource} />;
};

export default ResourceRenderer;