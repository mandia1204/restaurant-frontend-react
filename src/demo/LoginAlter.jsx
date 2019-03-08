import React, { Fragment } from 'react';
import { withRouter } from 'react-router';// eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { updateLoginData } from '../state/actions/AppActions';
import LoginForm from './LoginFormAlter';
import SecurityService from '../services/SecurityService';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'matt',
      password: '1234', //eslint-disable-line
    };
  }

  onFieldChange = handleChange => (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    return handleChange(e);
  };

  onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  login = () => {
    const securityService = SecurityService();
    const { history, dispatch } = this.props;
    securityService.authenticate();
    history.push('/');
    dispatch(updateLoginData({ user: { name: 'matt' }, authenticated: true }));
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
    const { userName } = this.state;
    return (
      <Fragment>
        <Formik
          initialValues={this.state}
          render={
          props => (
            <LoginForm
              loginData={this.state}
              {...props}
              handleChange={this.onFieldChange(props.handleChange)}
            />)
        }
          onSubmit={this.onSubmit}
          validate={this.validate}
          validateOnChange={false}
        />
        <div>
          {userName}
        </div>
      </Fragment>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(withRouter(Login));
