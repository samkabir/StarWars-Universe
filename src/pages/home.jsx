import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Pagination from '../components/UI/Pagination/Pagination';
import SearchBar from '../components/UI/SearchBar/SearchBar'; // Adjust path as needed
import { fetchAllResource } from '../api/fetchAllResource';
import { searchResource } from '../api/searchResource';

// Simple in-memory cache
const resourceCache = {};
const searchCache = {};

const Home = () => {
  const [characters, setCharacters] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();

  const handleSingleResource = (url) => {
    navigate(`/people/${url}`);
  };

  const fetchData = async (page) => {
    const endpoint = `people?page=${page}`;

    if (resourceCache[endpoint]) {
      setCharacters(resourceCache[endpoint]);
      setTotalPages(resourceCache[endpoint].total_pages);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    const response = await fetchAllResource('people', page);

    if (response.success && response.data) {
      resourceCache[endpoint] = response.data;
      setCharacters(response.data);
      console.log('Fetched data:', response.data);
      setTotalPages(response.data.total_pages);
    } else {
      setError(response.message || 'Something went wrong');
    }
    setLoading(false);
  };

  const handleSearch = useCallback(async (searchTerm) => {
    if (!searchTerm.trim()) {
      // If search is empty, go back to cached pagination results
      setIsSearching(false);
      setSearchResults(null);
      setError(null);
      return;
    }

    // Check search cache first
    if (searchCache[searchTerm]) {
      setSearchResults(searchCache[searchTerm]);
      setIsSearching(true);
      return;
    }

    setSearchLoading(true);
    setIsSearching(true);
    setError(null);

    const response = await searchResource('people', searchTerm);

    if (response.success && response.data) {
      searchCache[searchTerm] = response.data;
      setSearchResults(response.data);
      console.log('Search results:', response.data);
    } else {
      setError(response.message || 'Search failed');
      setSearchResults(null);
    }
    setSearchLoading(false);
  }, []);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  // Determine which data to display
  const displayData = isSearching ? searchResults : characters;
  const memoizedCharacters = useMemo(() => {
    if (isSearching) {
      // For search results, the structure might be different
      return searchResults?.result || searchResults?.results || [];
    }
    return characters?.results || [];
  }, [characters, searchResults, isSearching]);

  const showLoading = loading || searchLoading;
  const showPagination = !isSearching && characters && !showLoading;

  if (showLoading && !isSearching) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Characters</h1>
      
      <SearchBar 
        onSearch={handleSearch}
        placeholder="Search for characters..."
      />

      {searchLoading && <p>Searching...</p>}
      
      {isSearching && memoizedCharacters.length === 0 && !searchLoading && (
        <p>No characters found matching your search.</p>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {memoizedCharacters.map((character) => (
        <div
          key={character.uid}
          style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', cursor: 'pointer' }}
          className='hover:bg-gray-100 transition-colors duration-200 hover:text-black'
          onClick={() => handleSingleResource(character.uid)}
        >
          <h2>{character.properties?.name || character.name}</h2>
        </div>
      ))}

      </div>
      
      {showPagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default Home;