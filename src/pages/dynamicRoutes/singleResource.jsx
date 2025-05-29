import React from 'react';
import { useParams } from 'react-router-dom';
import SingleResourceLayout from '../../components/UI/SingleResourceLayout/SingleResourceLayout';

const SingleResources = () => {
  const { id } = useParams();
  const resourceType = useResourceType();
  
  const { 
    resource, 
    loading, 
    error, 
    refetch 
  } = useSingleResource(resourceType, id);

  return (
    <SingleResourceLayout
      resource={resource}
      resourceType={resourceType}
      loading={loading}
      error={error}
      onRetry={refetch}
    />
  );
};

export default SingleResources;