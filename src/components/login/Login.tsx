import React, { Dispatch } from 'react';
import { withRouter, RouteComponentProps } from 'react-router'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Actions from '../../state/actions/AppActions';
import LoginForm from './LoginForm';
import SecurityService from '../../services/SecurityService';

interface Props extends RouteComponentProps<any> {
  dispatch: Dispatch<any>;
}

class Login extends React.Component<Props, any> {
  securityService:any;

  constructor(props:Props) {
    super(props);
    this.securityService = SecurityService();
  }

  onSubmit = (values: any, ...args: any[]) => {
    this.login(values, args[0].setSubmitting);
  }

  loginSuccess = (user: any) => {
    const { history, dispatch } = this.props;
    history.push('/');
    const { Creators } = Actions;
    dispatch(Creators.updateLoginData({ user: { name: user.userName }, authenticated: true }));
  }

  loginFail = () => {
    alert('auth failed'); //eslint-disable-line
  }

  login = (user: any, setSubmitting: any) => {
    this.securityService.authenticate(user).then((response:any) => {
      setSubmitting(false);
      if (response.success) {
        this.loginSuccess(user);
      } else {
        this.loginFail();
      }
    });
  }

  validate = (values: any) => {
    const errors: any = {};

    if (!values.userName) {
      errors.userName = 'User name required';
    }
    if (!values.password) {
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
        render={(props:any) => (<LoginForm {...props} />)}
        onSubmit={this.onSubmit}
        validate={this.validate}
        validateOnChange={false}
      />
    );
  }
}

export default connect()(withRouter(Login));
