import React from 'react';
import { render } from '@testing-library/react';

import { BookCard } from './BookCard';

describe('BookCard', () => {
  describe('render', () => {
    it('should render the component with title', () => {
      const { getByText } = render(<BookCard title="book title" />)
      expect(getByText('book title')).toBeTruthy();
    });

    it('should render the component with author', () => {
      const { getByText } = render(<BookCard author={['book author']} />)
      expect(getByText('By book author')).toBeTruthy();
    });

    it('should render the component with number of pages', () => {
      const { getByText } = render(<BookCard pages={300} />)
      expect(getByText('300 pages')).toBeTruthy();
    });

    it('should render the component without number of pages when falsy', () => {
      const { queryByText } = render(<BookCard />)
      expect(queryByText('300 pages')).toBeFalsy();
    });

    it('should render the component with publicationCity and publicationCountry', () => {
      const { queryByText } = render(<BookCard publicationCity="Zurich" publicationCountry="Switzerland" />)
      expect(queryByText('Zurich, Switzerland')).toBeTruthy();
    });

    it('should render the component with publicationCity only', () => {
      const { queryByText } = render(<BookCard publicationCity="Zurich" />)
      expect(queryByText('Zurich')).toBeTruthy();
    });

    it('should render the component with publicationCountry only', () => {
      const { queryByText } = render(<BookCard publicationCountry="Switzerland" />)
      expect(queryByText('Switzerland')).toBeTruthy();
    });

    it('should render publication year', () => {
      const { queryByText } = render(<BookCard author={['book author']} publicationYear="1948" />)
      expect(queryByText('By book author - 1948')).toBeTruthy();
    });
  })
});
