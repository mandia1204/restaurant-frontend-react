import React, { Dispatch } from 'react';
// import { withRouter, RouteComponentProps } from 'react-router'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import { Formik, FormikActions, FormikProps } from 'formik';
import Actions from '../../state/actions/AppActions';
import LoginForm from './LoginForm';
import SecurityService from '../../services/SecurityService';
import ISecurityService from '../../types/ISecurityService';
import LoginCredentials from '../../types/LoginCredentials';

// interface LoginProps extends RouteComponentProps<any> {
//   dispatch: Dispatch<any>;
// }
interface LoginProps {
  dispatch: Dispatch<any>;
}

class Login extends React.Component<LoginProps, any> {
  securityService: ISecurityService;

  constructor(props: LoginProps) {
    super(props);
    this.securityService = SecurityService();
  }

  onSubmit = (values: LoginCredentials, { setSubmitting }: FormikActions<LoginCredentials>) => {
    this.login(values, setSubmitting);
  }

  loginSuccess = (credentials: LoginCredentials) => {
    // const { history, dispatch } = this.props;
    // history.push('/');
    const { dispatch } = this.props; //TODO: IMPLEMENT history
    const { Creators } = Actions;
    dispatch(Creators.updateLoginData({ user: { name: credentials.userName }, authenticated: true }));
  }

  loginFail = () => {
    alert('auth failed'); //eslint-disable-line
  }

  login = (user: LoginCredentials, setSubmitting: (isSubmitting: boolean) => void) => {
    this.securityService.authenticate(user).then((response: any) => {
      setSubmitting(false);
      if (response.success) {
        this.loginSuccess(user);
      } else {
        this.loginFail();
      }
    });
  }

  validate = (credentials: LoginCredentials) => {
    const errors: any = {};

    if (!credentials.userName) {
      errors.userName = 'User name required';
    }
    if (!credentials.password) {
      errors.password = 'Password required';
    }
    return errors;
  }

  render() {
    return (
      <Formik
        initialValues={{
          userName: 'matt',
          password: '1234',
        }}
        render={(props: FormikProps<LoginCredentials>) => (<LoginForm {...props} />)}
        onSubmit={this.onSubmit}
        validate={this.validate}
        validateOnChange={false}
      />
    );
  }
}

export default connect()(Login);
