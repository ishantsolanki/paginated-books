import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';

export const renderWithRouter = (component, path, initialEntries = "") => {
  return render (
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialEntries]}>
        <Route path={path}>
          {component}
        </Route>
      </MemoryRouter>
    </Provider>
  );
}
