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