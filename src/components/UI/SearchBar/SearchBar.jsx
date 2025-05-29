import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, placeholder = "Search characters...", initialValue = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  // Update local state when initialValue changes (from URL)
  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, 2000); // 2 second debounce

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '400px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '12px 40px 12px 16px',
            fontSize: '16px',
            border: '2px solid #ddd',
            borderRadius: '8px',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => e.target.style.borderColor = '#007bff'}
          onBlur={(e) => e.target.style.borderColor = '#ddd'}
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
              color: '#666',
              padding: '0',
              lineHeight: '1',
            }}
            onMouseEnter={(e) => e.target.style.color = '#333'}
            onMouseLeave={(e) => e.target.style.color = '#666'}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;