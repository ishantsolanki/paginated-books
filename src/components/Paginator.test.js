import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';

import { Paginator } from './Paginator';

const renderWithRouter = (component, path, initialEntries = "") => {
  return render (
  <MemoryRouter initialEntries={[initialEntries]}>
    <Route path={path}>
      {component}
    </Route>
  </MemoryRouter>
  );
}

describe('Paginator', () => {
  describe('render', () => {
    it('should render the component when page is 1', () => {
      const { getByText } = renderWithRouter(<Paginator numberOfPages={20} />, '/');
      expect(getByText('Page 1 of 20')).toBeTruthy();
    });

    it('should render the component when page is 14', () => {
      const { getByText } = renderWithRouter(<Paginator numberOfPages={20} />, '/page-:page', '/page-14');
      expect(getByText('Page 14 of 20')).toBeTruthy();
    });
  })
});
