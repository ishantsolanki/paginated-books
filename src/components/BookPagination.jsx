import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

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

Header.propTypes = {
  title: PropTypes.node,
};

Header.defaultProps = {
  title: '',
}

export const BookPagination = ({
  loadBookApi,
}) => {
  const { page } = useParams();

  useEffect(() => {
    loadBookApi(page);
  }, [loadBookApi, page]);

  return (
    <Container fluid="xl">
      <Jumbotron >
        <Header title="Books from Greece"/>
        <BooksList />
        <Paginator />
      </Jumbotron>
    </Container>
  );
};

BookPagination.propTypes = {
  loadBookApi: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(BookPagination);
