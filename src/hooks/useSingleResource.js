import { useState, useEffect, useMemo, useCallback } from 'react';
import { fetchSingleData } from '../../api/fetchSingleData';

const resourceCache = {};

export const useSingleResource = (resourceType, id) => {
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cacheKey = `${resourceType}-${id}`;
  const cachedResource = useMemo(() => resourceCache[cacheKey], [cacheKey]);

  const fetchData = useCallback(async () => {
    if (!resourceType || !id) {
      setError('Invalid resource type or ID');
      setLoading(false);
      return;
    }

    if (cachedResource) {
      setResource(cachedResource);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetchSingleData(resourceType, id);
      
      if (response.success && response.data) {
        const resourceData = response.data.result || response.data;
        resourceCache[cacheKey] = resourceData;
        setResource(resourceData);
      } else {
        setError(response.message || 'Failed to fetch resource');
      }
    } catch (err) {
      setError('Something went wrong while fetching the resource');
    } finally {
      setLoading(false);
    }
  }, [resourceType, id, cachedResource, cacheKey]);

  const refetch = useCallback(() => {
    delete resourceCache[cacheKey];
    fetchData();
  }, [cacheKey, fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    resource,
    loading,
    error,
    refetch,
  };
};