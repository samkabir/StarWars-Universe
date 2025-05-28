import { useState, useEffect, useCallback } from 'react';
import { fetchAllResource } from '../api/fetchAllResource';
import { searchResource } from '../api/searchResource';


const resourceCache = {};
const searchCache = {};

export const useResourceData = (resourceType = 'people') => {
  const [data, setData] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const fetchData = useCallback(async (page) => {
    const endpoint = `${resourceType}?page=${page}`;

    if (resourceCache[endpoint]) {
      setData(resourceCache[endpoint]);
      setTotalPages(resourceCache[endpoint].total_pages);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const response = await fetchAllResource(resourceType, page);

      if (response.success && response.data) {
        resourceCache[endpoint] = response.data;
        setData(response.data);
        setTotalPages(response.data.total_pages);
      } else {
        setError(response.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [resourceType]);

  const handleSearch = useCallback(async (searchTerm) => {
    if (!searchTerm.trim()) {
      setIsSearching(false);
      setSearchResults(null);
      setError(null);
      return;
    }

    if (searchCache[searchTerm]) {
      setSearchResults(searchCache[searchTerm]);
      setIsSearching(true);
      return;
    }

    setSearchLoading(true);
    setIsSearching(true);
    setError(null);

    try {
      const response = await searchResource(resourceType, searchTerm);

      if (response.success && response.data) {
        searchCache[searchTerm] = response.data;
        setSearchResults(response.data);
      } else {
        setError(response.message || 'Search failed');
        setSearchResults(null);
      }
    } catch (err) {
      setError('Search failed');
      setSearchResults(null);
    } finally {
      setSearchLoading(false);
    }
  }, [resourceType]);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);

  return {
    data,
    searchResults,
    loading,
    searchLoading,
    error,
    currentPage,
    totalPages,
    isSearching,
    setCurrentPage,
    handleSearch,
  };
};