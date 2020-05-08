import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export const BookCard = ({
  author,
  pages,
  publicationCity,
  publicationCountry,
  publicationYear,
  title,
}) => (
  <Container>
    <Row><h4>{title}</h4></Row>

    <Row>By {author.join()} {!!publicationYear && `- ${publicationYear}`}</Row>

    {!!pages && (
      <Row>{pages} pages</Row>
    )}

    {(!!publicationCity || !!publicationCountry) && (
      <Row>
        {[publicationCity, publicationCountry].filter(Boolean).join(', ')}
      </Row>
    )}
  </Container>
);

BookCard.propTypes = {
  author: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  publicationCity: PropTypes.string,
  publicationCountry: PropTypes.string,
  publicationYear: PropTypes.string,
  pages: PropTypes.number,
};

BookCard.defaultProps = {
  author: [],
  title: '',
  publicationCity: null,
  publicationCountry: null,
  pubicationsYear: null,
  pages: null,
};

export default BookCard;
