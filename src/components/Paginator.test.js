import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Paginator } from './Paginator';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();

  return {
    ...render (
    <Router history={history} initialEntries={['/page-14']}>
        {component}
    </Router>
    ),
    history
  }
}

describe('Paginator', () => {
  describe('render', () => {
    it('should render the component when page is 1', () => {
      const { getByText } = renderWithRouter(<Paginator numberOfPages={20} />);
      expect(getByText('Page 1 of 20')).toBeTruthy();
    });
  })
});
