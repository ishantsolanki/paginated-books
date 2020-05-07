import { createStore } from 'redux';
import rootReducers from './reducers/rootReducer';

export default createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
