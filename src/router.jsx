import React from 'react';
import BookPagination from './components/BookPagination.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/:page" children={<BookPagination />} />
    </Switch>
  </Router>
);

export default AppRouter;
