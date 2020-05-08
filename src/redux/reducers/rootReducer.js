import { combineReducers } from 'redux';
import bookReducers from './bookReducers/bookReducers';


export default combineReducers({
  books: bookReducers,
});
