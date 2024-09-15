import { Pagination } from 'flowbite-react';
import React, { useState } from 'react';

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1); 


  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(`Siz ${pageNumber}-sahifani tanladingiz!`);
  };


  const customPageStyle = (pageNumber) => {
    return pageNumber === currentPage
      ? 'bg-[rgba(255,255,255,0.4)] text-black'
      : 'bg-transparent text-gray-500 hover:text-black';
  };

  return (
    <div className="flex justify-center mt-4">
      <Pagination
        currentPage={currentPage}
        totalPages={10} 
        onPageChange={handlePageClick}
        className="bg-transparent" 
        renderItem={(pageNumber) => (
          <button
            className={`px-4 py-2 mx-1 rounded-lg transition-colors ${customPageStyle(pageNumber)}`}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        )}
      />
    </div>
  );
};

export default PaginationComponent;
