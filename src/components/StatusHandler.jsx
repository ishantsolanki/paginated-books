import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        <span>Loading</span>
      )}

      {status === STATUSES.RESOLVED &&  children}

      {status === STATUSES.ERROR && (
        <span>Error occured. Please check your internet connection. Alternatively you can <a href="/">refresh</a> the page</span>
      )}
    </>
  )
};

StatusHandler.propTypes = {
  status: PropTypes.oneOf(Object.values(STATUSES)),
  children: PropTypes.node,
}

export const BookApiStatusHandler = connect(mapStateToBookApiProps)(StatusHandler);
