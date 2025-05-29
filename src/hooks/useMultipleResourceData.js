import { useState, useEffect, useMemo, useCallback } from 'react';
import { fetchSingleData } from '../api/fetchSingleData';

const resourceCache = {};

export const useMultipleResourceData = (resourceUrls, resourceType) => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const urlsKey = useMemo(() => {
    return resourceUrls?.join(',') || '';
  }, [resourceUrls]);

  const cachedResources = useMemo(() => {
    if (!resourceUrls?.length) return null;
    
    const cached = [];
    let allCached = true;
    
    for (const url of resourceUrls) {
      if (resourceCache[url]) {
        cached.push(resourceCache[url]);
      } else {
        allCached = false;
        break;
      }
    }
    
    return allCached ? cached : null;
  }, [urlsKey]);

 const extractIdFromUrl = useCallback((url) => {
  if (!url || typeof url !== 'string') {
    return null;
  }
  const match = url.match(/\/(\d+)$/);
  return match ? match[1] : null;
}, []);

  const fetchResources = useCallback(async () => {
    const validUrls = resourceUrls?.filter(url => url && typeof url === 'string') || [];
    if (!validUrls?.length) {
      setResources([]);
      setLoading(false);
      return;
    }

    if (cachedResources) {
      setResources(cachedResources);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const resourcePromises = resourceUrls.map(async (url) => {
        if (resourceCache[url]) {
          return resourceCache[url];
        }

        const id = extractIdFromUrl(url);
        if (!id) {
          throw new Error(`Invalid Resource URL: ${url}`);
        }

        const response = await fetchSingleData(resourceType, id);
        
        if (response.success && response.data) {
          const resourceData = {
            id,
            url,
            name: response.data.result?.properties?.name || response.data.properties?.name || 'Unknown',
            ...response.data.result?.properties || response.data.properties || {}
          };
          
          resourceCache[url] = resourceData;
          return resourceData;
        } else {
          throw new Error(response.message || 'Failed to fetch resource');
        }
      });

      const resourceResults = await Promise.all(resourcePromises);
      setResources(resourceResults);
    } catch (err) {
      console.error('Error fetching resources:', err);
      setError('Failed to load resources');
      setResources([]);
    } finally {
      setLoading(false);
    }
  }, [resourceUrls, cachedResources, extractIdFromUrl]);

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  const refetch = useCallback(() => {
    resourceUrls?.forEach(url => {
      delete resourceCache[url];
    });
    fetchResources();
  }, [resourceUrls, fetchResources]);

  return {
    resources,
    loading,
    error,
    refetch
  };
};