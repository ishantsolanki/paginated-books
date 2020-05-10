import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

import { getBookCollection } from '../redux/selectors/book';

import BookCard from './BookCard';

const mapStateToProps = (state) => ({
  books: getBookCollection(state),
});

export const BooksList = ({
  books,
}) => (
  <ListGroup>
    {books.map(book => (
      <ListGroup.Item key={book.id}>
        <BookCard
          author={book.book_author}
          pages={book.book_pages}
          publicationCity={book.book_publication_city}
          publicationCountry={book.book_publication_country}
          publicationYear={book.book_publication_year}
          title={book.book_title}
        />
      </ListGroup.Item>
    ))}
  </ListGroup>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.arrayOf(PropTypes.string),
    pages: PropTypes.number,
    publicationCity: PropTypes.string,
    publicationCountry: PropTypes.string,
    publicationYear: PropTypes.number,
    title: PropTypes.string,
  })),
}

export default connect(mapStateToProps)(BooksList);
