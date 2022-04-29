import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import Button from '@mui/material/Button';
import LoginForm from './LoginForm';
import '../../../setupTest';
import InputText from '../controls/InputText';

test('[LoginForm]', (t) => {
  t.test('--should render the form with all props', (a) => {
    const props = {
      values: { userName: 'mateo', password: '1234' },
      handleChange: () => ({}),
      handleBlur: () => ({}),
      handleSubmit: () => ({}),
      isSubmitting: false,
      touched: {},
      errors: {},
    };
    const wrapper = shallow(<LoginForm {...props} />).dive();

    const form = wrapper.find('form');

    const { handleSubmit, values, isSubmitting } = props;
    a.equal(form.length, 1, 'should have 1 form');
    a.equal(form.prop('onSubmit'), handleSubmit, 'form should have the submit function');

    const userName = wrapper.find(InputText).find('[fieldName="userName"]').props().value;
    const password = wrapper.find(InputText).find('[fieldName="password"]').props().value;
    a.equal(userName, values.userName, 'username should be populated');
    a.equal(password, values.password, 'password should be populated');

    const submitButton = wrapper.find(Button).find('[type="submit"]');
    a.equal(submitButton.prop('disabled'), isSubmitting, 'button should not be disabled');

    a.end();
  });

  t.skip('');
});
