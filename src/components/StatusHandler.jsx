import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

import { STATUSES } from '../constants';

const mapStateToBookApiProps = (state) => ({
  status: state.books.status,
});

export const StatusHandler = ({
  status,
  children,
}) => {
  return (
    <>
      {status === STATUSES.PENDING && (
        <p className="d-flex justify-content-center p-4">
          <Spinner animation="border" variant="primary" size="lg" />
        </p>
      )}

      {status === STATUSES.RESOLVED &&  children}

      {status === STATUSES.ERROR && (
        <p className="d-flex justify-content-center p-4">
          <Alert variant="secondary">
            <Alert.Heading>An error occured while getting books.</Alert.Heading>
            Try <a href="/">refreshing</a> the page.
          </Alert>
        </p>
      )}
    </>
  )
};

StatusHandler.propTypes = {
  status: PropTypes.oneOf(Object.values(STATUSES)),
  children: PropTypes.node,
}

export const BookApiStatusHandler = connect(mapStateToBookApiProps)(StatusHandler);
