import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { loadBookApi } from '../redux/actions';

import BooksList from '../components/BooksList';
import Paginator from '../components/Paginator';

const mapDispatchToProps = {
  loadBookApi
};

export const Header = ({ title }) => (
  <>
    <h2 className="d-flex justify-content-center">{title}</h2>
    <hr/>
  </>
);

export const BookPagination = ({
  loadBookApi,
}) => {
  const { page } = useParams();

  useEffect(() => {
    loadBookApi(page);
  }, [loadBookApi, page]);

  return (
    <Jumbotron>
      <Header title="Books from Greece"/>
      <BooksList />
      <Paginator />
    </Jumbotron>
  );
};

export default connect(null, mapDispatchToProps)(BookPagination);
