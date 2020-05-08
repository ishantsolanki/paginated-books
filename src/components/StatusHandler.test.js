import React from 'react';
import { render } from '@testing-library/react';

import { STATUSES } from '../constants';

import { StatusHandler } from './StatusHandler';

describe('StatusHandler', () => {
  describe('render', () => {
    it('should render the component when status is pending', () => {
      const { getByTestId } = render(<StatusHandler status={STATUSES.PENDING} />)
      expect(getByTestId('loading-spinner')).toBeTruthy();
    });

    it('should render the component when status is resolved', () => {
      const { getByText } = render(<StatusHandler status={STATUSES.RESOLVED}>I am the only child</StatusHandler>);
      expect(getByText('I am the only child')).toBeTruthy();
    });

    it('should render the component when status is error', () => {
      const { getByText } = render(<StatusHandler status={STATUSES.ERROR} />)
      expect(getByText('An error occured while getting books.')).toBeTruthy();
    });
  })
});
