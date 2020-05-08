import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'

export const BookCard = ({
  author,
  pages,
  publicationCity,
  publicationCountry,
  publicationYear,
  title,
}) => (
  <Card>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {author.join()}
      </Card.Text>
      {!!pages && (
        <Card.Text>
          Pages: {pages}
        </Card.Text>
      )}
      {(!!publicationCity || !!publicationCountry) && (
        <Card.Text>
          {[publicationCity, publicationCountry].filter(Boolean).join(', ')}
        </Card.Text>
      )}
      {!!publicationYear && (
        <Card.Text>
          {publicationYear}
        </Card.Text>
      )}
    </Card.Body>
  </Card>
);

BookCard.propTypes = {
  author: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  publicationCity: PropTypes.string,
  publicationCountry: PropTypes.string,
  publicationYear: PropTypes.number,
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
