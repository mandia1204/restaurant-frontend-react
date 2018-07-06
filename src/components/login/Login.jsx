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

  login = () => {
    this.authClient.authenticate();
    this.props.history.push('/');
    this.props.dispatch(showNavLinks(true));
  }

  onSubmit = (...args) => {
    this.login();
    args[1].setSubmitting(false);
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