import React from 'react';
import BookLayout from './components/BookLayout.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/page-:page" children={<BookLayout />} />
      <Route path="/" children={<BookLayout />} />
    </Switch>
  </Router>
);

export default AppRouter;
