import api from '../api';

export const TYPES = {
  LOAD_BOOK_API: 'LOAD_BOOK_API',
  LOAD_BOOK_API_START: 'LOAD_BOOK_API_START',
  LOAD_BOOK_API_SUCCESS: 'LOAD_BOOK_API_SUCCESS',
  LOAD_BOOK_API_ERROR: 'LOAD_BOOK_API_ERROR',
}

export const loadBookApiStart = () => ({ type: TYPES.LOAD_BOOK_API_START });
export const loadBookApiSuccess = (response) => ({ type: TYPES.LOAD_BOOK_API_SUCCESS, response });
export const loadBookApiError = (error) => ({ type: TYPES.LOAD_BOOK_API_ERROR, error });

export const loadBookApi = (pageNumber) => {
  return async (dispatch) => {
    dispatch(loadBookApiStart());
    try {
      const response = await api.getBooksApi(pageNumber);
      const responseJson = await response.json();
      return dispatch(loadBookApiSuccess(responseJson));
    }
    catch (error) {
      return dispatch(loadBookApiError(error));
    }
  };
};
