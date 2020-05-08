import { TYPES } from "../../actions";
import { RESULTS_PER_PAGE } from "../../../constants";

const onBookApiSuccess = (state, response) => {
  const numberOfPages = Math.floor(response.count / RESULTS_PER_PAGE) + (response.count % RESULTS_PER_PAGE === 0 ? 0 : 1);

  return {
    ...state,
    collection: response.books,
    count: response.count,
    numberOfPages,
  }
}

export default function (state, action) {
  const newState = !!state ? {...state} : { collection: [] };

  switch(action.type) {
    case TYPES.LOAD_BOOK_API_SUCCESS: return onBookApiSuccess(newState, action.response)
    default:
  }

  return newState;
}
