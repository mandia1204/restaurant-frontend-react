import React from 'react';
import test from 'tape';
import { render, cleanup } from '../../util/testUtils';
import LoginForm from './LoginForm';

test('[LoginForm]', (t) => {
  t.test('--should render the form with default props', (a) => {
    const props = {
      values: { userName: 'mateo', password: '1234' },
      handleChange: () => ({}),
      handleBlur: () => ({}),
      handleSubmit: () => ({}),
      isSubmitting: false,
      touched: {},
      errors: {},
    };

    const { getByText, getByLabelText } = render(<LoginForm {...props} />);

    const button = getByText('Login');
    const cognitoButton = getByText('Login with Cognito');
    const passwordInput = getByLabelText('Password');
    const userNameInput = getByLabelText('User name');

    a.equal(button.innerText, 'LOGIN', 'button should be present');
    a.equal(cognitoButton.innerText, 'LOGIN WITH COGNITO', 'button should be present');
    a.equal(passwordInput.value, '1234', 'default password text populated');
    a.equal(userNameInput.value, 'mateo', 'default userName text populated');
    cleanup();
    a.end();
  });

  t.test('--should disable button when submitting', (a) => {
    const props = {
      values: { userName: 'mateo', password: '1234' },
      handleChange: () => ({}),
      handleBlur: () => ({}),
      handleSubmit: () => ({}),
      isSubmitting: true,
      touched: {},
      errors: {},
    };

    const { getByText } = render(<LoginForm {...props} />);

    const submitButton = getByText('Login');

    a.true(submitButton.hasAttribute('disabled'), 'button should be disabled');
    cleanup();
    a.end();
  });

  t.skip('');
});
