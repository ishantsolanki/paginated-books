import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux';

import Pagination from 'react-bootstrap/Pagination';

export const mapStateToProps = (state) => ({
  totalBooks: state?.books?.count,
  numberOfPages: state?.books?.numberOfPages,
});


export const Paginator = ({
  numberOfPages,
}) => {
  let { page } = useParams();
  page = parseInt(page) || 1;

  let items = [];
  for (let number = page - 1 || 1; number <= numberOfPages && number <= page + 1; number++) {
    items.push(
      <LinkContainer key={number} to={`/page-${number}`}>
        <Pagination.Item active={number === page}>
          {number}
        </Pagination.Item>
      </LinkContainer>
    );
  }

  return (
    <>
      <p className="p-3 text-center">
        Page {page} of {numberOfPages}
      </p>
      <div className="p-3 d-flex justify-content-center">
        <Pagination>
          {page > 2 && (
            <>
              <LinkContainer to="/page-1"><Pagination.First active={false} /></LinkContainer>
              <Pagination.Ellipsis disabled/>
            </>
          )}
          {items}
          {(numberOfPages - page >= 2) && (
            <>
              <Pagination.Ellipsis disabled />
              <LinkContainer to={`/page-${numberOfPages}`}><Pagination.Last /></LinkContainer>
            </>
          )}
        </Pagination>
      </div>
    </>
  )
}

Paginator.propTypes = {
  totalBooks: PropTypes.number,
}

Paginator.defaultProps = {
  totalBooks: 0,
}

export default connect(mapStateToProps)(Paginator);
