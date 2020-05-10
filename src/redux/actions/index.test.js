import * as actions from './index';
import api from '../api';

describe('actions', () => {
  describe('loadBookApiStart', () => {
    it('should return the correct action', () => {
      expect(actions.loadBookApiStart()).toEqual({ type: actions.TYPES.LOAD_BOOK_API_START });
    });
  });

  describe('loadBookApiSuccess', () => {
    it('should return the correct action', () => {
      expect(actions.loadBookApiSuccess('success')).toEqual({ type: actions.TYPES.LOAD_BOOK_API_SUCCESS, response: 'success' });
    });
  });

  describe('loadBookApiError', () => {
    it('should return the correct action', () => {
      expect(actions.loadBookApiError('error')).toEqual({ type: actions.TYPES.LOAD_BOOK_API_ERROR, error: 'error' });
    });
  });

  describe('onBookFilterInput', () => {
    it('should return the correct action', () => {
      expect(actions.onBookFilterInput('value')).toEqual({ type: actions.TYPES.FILTER_BOOK_CHANGE, value: 'value' });
    });
  });

  describe('loadBookApi', () => {
    it('should dispatch loadBookApiStart action', async () => {
      const dispatchMock = jest.fn();
      jest.spyOn(api, 'getBooksApi').mockResolvedValue({ json: () => 'yay' });

      await actions.loadBookApi(5)(dispatchMock, jest.fn());

      expect(dispatchMock).toHaveBeenCalledWith({ type: actions.TYPES.LOAD_BOOK_API_START });
    });

    it('should dispatch loadBookApiSuccess action', async () => {
      const dispatchMock = jest.fn();
      const getStateMock = jest.fn();
      jest.spyOn(api, 'getBooksApi').mockResolvedValue({ json: () => 'yay' });

      await actions.loadBookApi(5)(dispatchMock, getStateMock);

      expect(dispatchMock).toHaveBeenCalledWith({ type: actions.TYPES.LOAD_BOOK_API_SUCCESS, response: 'yay' });
    });

    it('should dispatch loadBookApiError action', async () => {
      const dispatchMock = jest.fn();
      const getStateMock = jest.fn();
      jest.spyOn(api, 'getBooksApi').mockReturnValue(Promise.reject('error'));
      await actions.loadBookApi(5)(dispatchMock, getStateMock);

      expect(dispatchMock).toHaveBeenCalledWith({ type: actions.TYPES.LOAD_BOOK_API_ERROR, error: 'error' });
    });
  });
});

