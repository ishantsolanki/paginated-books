import React from 'react';
import { renderWithRouter } from '../testUtils';

import { BookLayout } from './BookLayout';

describe('BookLayout', () => {
  describe('render', () => {
    it('should render the component with title', () => {
      const loadBookApiStub = jest.fn();
      renderWithRouter(<BookLayout loadBookApi={loadBookApiStub} />)
      expect(loadBookApiStub).toHaveBeenCalledTimes(1);
    });
  })
});
