import { TYPES } from "../../actions";
import { RESULTS_PER_PAGE, STATUSES } from "../../../constants";

const onBookApiSuccess = (state, response) => {
  const numberOfPages = Math.floor(response.count / RESULTS_PER_PAGE) + (response.count % RESULTS_PER_PAGE === 0 ? 0 : 1);

  return {
    ...state,
    collection: response.books,
    count: response.count,
    numberOfPages,
    status: STATUSES.RESOLVED,
  }
}

const onBookFilterChange = (state, value) => ({
  ...state,
  searchParam: value,
})

const onBookApiStart = (state) => ({
  ...state,
  status: STATUSES.PENDING,
})

const onBookApiError = (state) => ({
  ...state,
  status: STATUSES.ERROR,
})

const initialState = {
  collection: [],
  status: STATUSES.PENDING,
  searchParam: '',
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
    case TYPES.FILTER_BOOK_CHANGE: return onBookFilterChange(newState, action.value)
    default: return newState
  }
}
