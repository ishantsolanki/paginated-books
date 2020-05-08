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
      <Route path="/" children={<BookLayout />} />
      <Route path="/page-:page" children={<BookLayout />} />
    </Switch>
  </Router>
);

export default AppRouter;
