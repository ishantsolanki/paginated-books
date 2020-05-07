import { combineReducers } from 'redux';
import paginationReducers from './paginationReducers/paginationReducers';
import bookReducers from './bookReducers/bookReducers';

export default combineReducers({
  pagination: paginationReducers,
  book: bookReducers,
});
