import React from 'react';
import { withRouter } from 'react-router'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { updateLoginData } from '../../state/actions/AppActions';
import LoginForm from './LoginForm';
import SecurityService from '../../services/SecurityService';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.securityService = SecurityService();
  }

  onSubmit = (values, ...args) => {
    this.login(values, args[0].setSubmitting);
  }

  loginSuccess = (user) => {
    const { history, dispatch } = this.props;
    history.push('/');
    dispatch(updateLoginData({ user: { name: user.userName }, authenticated: true }));
  }

  loginFail = () => {
    alert('auth failed'); //eslint-disable-line
  }

  login = (user, setSubmitting) => {
    this.securityService.authenticate(user).then((response) => {
      setSubmitting(false);
      if (response.success) {
        this.loginSuccess(user);
      } else {
        this.loginFail();
      }
    });
  }

  validate = (values) => {
    const errors = {};

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
        render={props => (<LoginForm {...props} />)}
        onSubmit={this.onSubmit}
        validate={this.validate}
        validateOnChange={false}
      />
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(withRouter(Login));
