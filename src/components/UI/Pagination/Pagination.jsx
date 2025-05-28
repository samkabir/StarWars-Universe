import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: '5px 10px',
            backgroundColor: page === currentPage ? '#007bff' : '#f0f0f0',
            color: page === currentPage ? '#fff' : '#000',
            border: '1px solid #ccc',
            cursor: 'pointer'
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
