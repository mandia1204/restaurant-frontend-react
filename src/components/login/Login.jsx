import React from 'react';
import AuthClient from '../../api/security/AuthClient';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNavLinks } from '../../state/actions/AppActions';
import LoginForm from './LoginForm';
import { Formik } from 'formik';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.authClient = AuthClient();
  }

  login = (user, setSubmitting) => {
    this.authClient.authenticate(user).then(response => {
      setSubmitting(false);
      if(response.success) {
        this.loginSuccess();
      }else {
        this.loginFail();
      }
    });
  }

  loginSuccess = () => {
    this.props.history.push('/');
    this.props.dispatch(showNavLinks(true));
  }

  loginFail = () => {
    alert('auth failed');
  }

  onSubmit = (values, ...args) => {
    this.login(values, args[0].setSubmitting);
  }

  validate = (values) => {
    let errors = {};

    if(!values.userName) {
      errors.userName = 'User name required';
    }
    if(!values.password) {
      errors.password = 'Password required';
    }
    return errors;
  }

  render() {
    return (
      <Formik
        initialValues = {{
          userName: 'matt',
          password: '1234'
        }}
        render={(props) => (<LoginForm {...props} />)}
        onSubmit= {this.onSubmit}
        validate= {this.validate}
        validateOnChange={false}
      />
    );
  }
}

Login.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default connect()(withRouter(Login));