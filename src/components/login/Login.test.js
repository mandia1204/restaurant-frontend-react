import React from 'react';
import test from 'tape';
import sinon from 'sinon';
import * as jwtParser from '../../util/jwtParser';
import {
  render, cleanup, fireEvent, screen,
} from '../../util/testUtils';
import Login from './Login';
import adapterMock from '../../mocks/adapter.mock';
import Notification from '../controls/Notification';
import HeaderContainer from '../header/HeaderContainer';
import Main from '../Main';

test('[Login]', (t) => {
  t.test('--should display error message when missing input', async (a) => {
    const { getByText, getByLabelText, findByText } = render(<Login />);

    const loginButton = getByText('Login');
    const passwordInput = getByLabelText('Password');
    const userNameInput = getByLabelText('User name');

    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.change(userNameInput, { target: { value: '' } });

    fireEvent.click(loginButton);
    const userRequiredMessage = await findByText('User name required');
    const passwordRequiredMessage = await findByText('Password required');
    a.true(userRequiredMessage !== null, 'User name required displayed');
    a.true(passwordRequiredMessage !== null, 'Password required displayed');
    cleanup();
    a.end();
  });

  t.test('--should display error message when authentication failed', async (a) => {
    const { getByText } = render(<div><Notification /> <Login /></div>);
    const loginButton = getByText('Login');

    adapterMock.onPost('/securityApi/token').reply(403, { });

    fireEvent.click(loginButton);
    const authFailedMessage = await screen.findByText('Authentication failed', {}, { timeout: 2000 });
    a.true(authFailedMessage !== null, 'User name required displayed');

    cleanup();
    a.end();
  });

  t.test('--should hide login when authentication passed', async (a) => {
    const stub = sinon.stub(jwtParser, 'parse')
      .callsFake(() => ({ userName: 'mandia', exp: Date.now() * 2000 }));

    const { getByText } = render(
      <div>
        <HeaderContainer />
        <Main />
        <Login />
      </div>,
    );
    const loginButton = getByText('Login');

    // eslint-disable-next-line
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NTIwMDY5OTcsImV4cCI6MTU4MzU0Mjk5NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInVzZXJOYW1lIjoibWF0dCJ9.L_gzR5r0bPr-RyXVGsXwcHjn6wxpByfjYUa0mLJT3fI';
    adapterMock.onPost('/securityApi/token').reply(200, { token });

    fireEvent.click(loginButton);
    const userMessage = await screen.findByText('User: matt', {}, { timeout: 1500 });
    a.true(userMessage !== null, 'Logged user section visible');

    const welcomeMessage = await screen.findByText('Welcome to the jungle!!!', {}, { timeout: 1500 });
    a.true(welcomeMessage !== null, 'Welcome message displayed');

    stub.restore();
    cleanup();
    a.end();
  });

  t.skip('');
});
