import React from 'react';
import test from 'tape';
import { render, cleanup } from '../../util/testUtils';
import { showNavLinks, updateLoginData } from '../../state/reducers/AppSlice';
import HeaderContainer from './HeaderContainer';
import { createAppStore } from '../../state/ConfigureStore';

test('[HeaderContainer]', (t) => {
  t.test('--should display logged user info and navlinks', async (a) => {
    const { dispatch } = createAppStore();
    dispatch(showNavLinks(true));
    dispatch(updateLoginData({ authenticated: true, name: 'matt' }));
    const { getByText, getByTestId } = render(
      <HeaderContainer />,
    );

    const userInfo = getByText('User: matt');
    a.true(userInfo !== null, 'Logged user info visible');

    const homeLink = getByTestId('HomeIcon');
    const dashboardLink = getByTestId('DashboardIcon');
    const settingsLink = getByTestId('SettingsIcon');

    a.true(homeLink !== null, 'Home link displayed');
    a.true(dashboardLink !== null, 'Dashboard link displayed');
    a.true(settingsLink !== null, 'Setting link displayed');

    cleanup();
    a.end();
  });

  t.skip('');
});
