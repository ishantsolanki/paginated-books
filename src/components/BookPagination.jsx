import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadBookApi } from '../redux/actions';

const mapDispatchToProps = {
  loadBookApi
};

export const BookPagination = ({
  loadBookApi,
}) => {
  const { page } = useParams();

  useEffect(() => {
    loadBookApi(page);
  }, [loadBookApi, page]);

  return (
    <div>Book Pagination - Page {page}</div>
  );
};

export default connect(null, mapDispatchToProps)(BookPagination);
