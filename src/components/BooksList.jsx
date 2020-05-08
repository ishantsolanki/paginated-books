import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BookCard from './BookCard';

const mapStateToProps = (state) => ({
  books: state.books.collection,
});

export const BooksList = ({
  books,
}) => (
  <div>
    {books.map(book => (
      <BookCard
        key={book.id}
        author={book.book_author}
        pages={book.book_pages}
        publicationCity={book.book_publication_city}
        publicationCountry={book.book_publication_country}
        publicationYear={book.book_publication_year}
        title={book.book_title}
      />
    ))}
  </div>
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
