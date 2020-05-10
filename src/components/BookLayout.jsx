import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import { loadBookApi } from '../redux/actions';

import { BookApiStatusHandler } from '../components/StatusHandler';
import BooksList from '../components/BooksList';
import Paginator from '../components/Paginator';
import BookFilter from '../components/BookFilter';

const mapDispatchToProps = {
  loadBookApi
};

const mapStateToProps = (state) => ({
  searchParam: state.books.searchParam,
});

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

export const BookLayout = ({
  loadBookApi,
  searchParam,
}) => {
  const { page } = useParams();

  useEffect(() => {
    loadBookApi(page || '1');
  }, [loadBookApi, page, searchParam]);

  return (
    <Container fluid="xl">
      <Jumbotron className="pb-0">
        <Header title="Books from Greece"/>
        <BookFilter />
        <BookApiStatusHandler>
          <BooksList />
          <Paginator />
        </BookApiStatusHandler>
      </Jumbotron>
    </Container>
  );
};

BookLayout.propTypes = {
  loadBookApi: PropTypes.func.isRequired,
  searchParam: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookLayout);
