import React, { useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '../components/UI/Pagination/Pagination';
import SearchBar from '../components/UI/SearchBar/SearchBar';
import ResourceGrid from '../components/UI/Grids/ResourceGrid';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../components/UI/ErrorMessage/ErrorMessage';
import { useResourceData } from '../hooks/useResourceData';

const Vehicles = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: vehicles,
    searchResults,
    loading,
    searchLoading,
    error,
    currentPage,
    totalPages,
    isSearching,
    setCurrentPage,
    handleSearch,
  } = useResourceData('vehicles');

  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    } else {
      handleSearch(''); 
    }
  }, [searchQuery, handleSearch]);

  const handleResourceClick = (uid) => {
    navigate(`/vehicles/${uid}`);
  };

  const handleSearchWithURL = (searchTerm) => {
    if (searchTerm.trim()) {
      setSearchParams({ search: searchTerm });
    } else {
      setSearchParams({});
    }
  };

  const displayResources = useMemo(() => {
    if (isSearching) {
      return searchResults?.result || searchResults?.results || [];
    }
    return vehicles?.results || [];
  }, [vehicles, searchResults, isSearching]);

  const showLoading = loading || searchLoading;
  const showPagination = !isSearching && vehicles && !showLoading && !error;

  if (showLoading && !isSearching) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className='flex justify-center'>
        <h1 className="text-3xl font-bold mb-6">Find Vehicles</h1>
      </div>

      <div className="mb-6 text-right">
        <SearchBar
          onSearch={handleSearchWithURL}
          placeholder="May the Force be with you..."
          initialValue={searchQuery} // Pass initial value from URL
        />
      </div>

      {searchLoading && <LoadingSpinner message="Searching..." />}

      <ResourceGrid
        resourceType='starships'
        resources={displayResources}
        onResourceClick={handleResourceClick}
        emptyMessage={
          isSearching
            ? "No vehicles found matching your search."
            : "No vehicles available."
        }
      />

      {showPagination && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default Vehicles;