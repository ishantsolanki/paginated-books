import bookReducer from './bookReducers';
import { TYPES } from "../../actions";
import { STATUSES } from "../../../constants";

describe('bookReducers', () => {
  describe('LOAD_BOOK_API_SUCCESS', () => {
    it('should return the state with new response', () => {
      const state = {
        previousStateValue: 'previous state value'
      };
      const action = {
        type: TYPES.LOAD_BOOK_API_SUCCESS,
        response: {
          books: [{book1: 'book1', book2: 'book2'}],
          count: 300,
        }
      };

      expect(bookReducer(state, action)).toEqual({
        previousStateValue: 'previous state value',
        collection: action.response.books,
        count: action.response.count,
        numberOfPages: 15,
        status: STATUSES.RESOLVED,
      });
    });
  });

  describe('LOAD_BOOK_API_START', () => {
    it('should return the state with new response', () => {
      const state = {
        previousStateValue: 'previous state value'
      };

      const action = {
        type: TYPES.LOAD_BOOK_API_START,
      };

      expect(bookReducer(state, action)).toEqual({
        previousStateValue: 'previous state value',
        status: STATUSES.PENDING,
      });
    });
  });

  describe('LOAD_BOOK_API_ERROR', () => {
    it('should return the state with new response', () => {
      const state = {
        previousStateValue: 'previous state value'
      };

      const action = {
        type: TYPES.LOAD_BOOK_API_ERROR,
      };

      expect(bookReducer(state, action)).toEqual({
        previousStateValue: 'previous state value',
        status: STATUSES.ERROR,
      });
    });
  });

  describe('FILTER_BOOK_CHANGE', () => {
    it('should return the state with new response', () => {
      const state = {
        previousStateValue: 'previous state value'
      };

      const action = {
        type: TYPES.FILTER_BOOK_CHANGE,
        value: 'new value'
      };

      expect(bookReducer(state, action)).toEqual({
        previousStateValue: 'previous state value',
        searchParam: 'new value',
      });
    });
  });
});
