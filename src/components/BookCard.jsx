import React from 'react';
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
        {author}
      </Card.Text>
      <Card.Text>
        Pages: {pages}
      </Card.Text>
      <Card.Text>
        {publicationCity}, {publicationCountry}
      </Card.Text>
      <Card.Text>
        {publicationYear}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default BookCard;
