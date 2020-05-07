import React from 'react';
import { useParams } from 'react-router-dom';

export const BookPagination = () => {
  const { page } = useParams();
  return (
    <div>Book Pagination - Page {page}</div>
  );
};

export default BookPagination;
