import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-3 py-1 border border-gray-300 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-white text-black disabled:bg-gray-200"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border border-gray-300 rounded cursor-pointer transition-colors ${
            page === currentPage
              ? 'bg-gray-200 text-black'
              : 'bg-gray-900 text-white hover:bg-blue-100'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border border-gray-300 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-white text-black disabled:bg-gray-200"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
