import { TYPES } from "../../actions";
import { RESULTS_PER_PAGE, BOOK_API_STATUS } from "../../../constants";

const onBookApiSuccess = (state, response) => {
  const numberOfPages = Math.floor(response.count / RESULTS_PER_PAGE) + (response.count % RESULTS_PER_PAGE === 0 ? 0 : 1);

  return {
    ...state,
    collection: response.books,
    count: response.count,
    numberOfPages,
    status: BOOK_API_STATUS.RESOLVED,
  }
}

const onBookApiStart = (state) => ({
  ...state,
  status: BOOK_API_STATUS.PENDING,
})

const onBookApiError = (state) => ({
  ...state,
  status: BOOK_API_STATUS.ERROR,
})

const initialState = {
  collection: [],
  status: BOOK_API_STATUS.PENDING,
}

export default function (state, action) {
  let newState;
  if (!state) {
    newState = initialState;
  } else {
    newState = state;
  }

  switch(action.type) {
    case TYPES.LOAD_BOOK_API_SUCCESS: return onBookApiSuccess(newState, action.response)
    case TYPES.LOAD_BOOK_API_START: return onBookApiStart(newState)
    case TYPES.LOAD_BOOK_API_ERROR: return onBookApiError(newState)
    default: return newState
  }
}
