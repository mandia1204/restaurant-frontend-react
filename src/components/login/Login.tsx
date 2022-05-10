import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Formik, FormikHelpers as FormikActions } from 'formik';
import { useNavigate } from 'react-router-dom';
import Actions from '../../state/actions/AppActions';
import LoginForm from './LoginForm';
import SecurityService from '../../services/SecurityService';
import ISecurityService from '../../types/ISecurityService';
import LoginCredentials from '../../types/LoginCredentials';
import EventsActions from '../../state/actions/EventsActions';

interface LoginProps {
  dispatch: Dispatch<any>;
}
const securityService: ISecurityService = SecurityService();

function Login(props: LoginProps) {
  const navigate = useNavigate();
  const { dispatch } = props;
  const loginSuccess = (credentials: LoginCredentials) => {
    navigate('/');
    const { Creators } = Actions;
    dispatch(Creators.updateLoginData({ user: { name: credentials.userName }, authenticated: true }));
  };

  const loginFail = () => {
    dispatch(EventsActions.Creators.sendNotification({ message: 'Authentication failed', variant: 'error' }));
  };

  const login = (user: LoginCredentials, setSubmitting: (isSubmitting: boolean) => void) => {
    securityService.authenticate(user).then((response: any) => {
      setSubmitting(false);
      if (response.success) {
        loginSuccess(user);
      } else {
        loginFail();
      }
    });
  };

  const onSubmit = (values: LoginCredentials, { setSubmitting }: FormikActions<LoginCredentials>) => {
    login(values, setSubmitting);
  };

  const validate = (credentials: LoginCredentials) => {
    const errors: any = {};

    if (!credentials.userName) {
      errors.userName = 'User name required';
    }
    if (!credentials.password) {
      errors.password = 'Password required';
    }
    return errors;
  };
  return (
    <Formik
      initialValues={{
        userName: 'matt',
        password: 'oli1234##hard',
      }}
      onSubmit={onSubmit}
      validate={validate}
      validateOnChange={false}
    >
      {(fprops) => (
        <LoginForm {...fprops} />
      )}
    </Formik>
  );
}

export default connect()(Login);
