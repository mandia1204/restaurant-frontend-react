import React from 'react';
import test from 'tape';
import { render, cleanup } from '../../util/testUtils';
import Home from './Home';

test('[Home]', (t) => {
  t.test('--should display welcome message', (a) => {
    const { getByText } = render(<Home />);

    const welcomeMessage = getByText('Welcome to the jungle!!!');
    a.true(welcomeMessage !== null, 'Welcome message displayed');

    cleanup();
    a.end();
  });
  t.skip('');
});
