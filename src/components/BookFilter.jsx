import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useDebounce } from 'use-debounce';

import { onBookFilterInput } from '../redux/actions/index.js';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export const mapDispatchToProps = {
  onChange: onBookFilterInput,
}

export const BookFilter = ({
  onChange
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  useEffect(() => {
    !!debouncedSearchTerm && onChange(debouncedSearchTerm);
  }, [debouncedSearchTerm, onChange]);

  return (
    <InputGroup>
      <FormControl
        placeholder="Search books"
        onChange={event => setSearchTerm(event.target.value)}
      />
    </InputGroup>
  );
};

BookFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookFilter);
