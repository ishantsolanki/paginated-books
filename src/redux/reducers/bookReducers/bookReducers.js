import { TYPES } from "../../actions";

const onBookApiSuccess = (state, response) => {
  return {
    ...state,
    collection: response.books,
    count: response.count,
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
