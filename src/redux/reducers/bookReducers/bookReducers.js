import { TYPES } from "../../actions";
import { RESULTS_PER_PAGE } from "../../../constants";

const onBookApiSuccess = (state, response) => {
  return {
    ...state,
    collection: response.books,
    count: response.count,
    numberOfPages: response.count % RESULTS_PER_PAGE + 1,
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
