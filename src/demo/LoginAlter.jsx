import React, { Fragment } from 'react';
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
    this.state = {
      userName: 'matt',
      password: '1234'
    };
  }

  login = () => {
    const authClient = AuthClient();
    authClient.authenticate();
    this.props.history.push('/');
    this.props.dispatch(showNavLinks(true));
  }

  onFieldChange =  (handleChange) => e => {
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
      <Fragment>
      <Formik
        initialValues = {this.state}
        render={
          (props) => (
          <LoginForm
            loginData={this.state}
            {...props}
            handleChange={this.onFieldChange(props.handleChange)}
           />)
        }
        onSubmit= {this.onSubmit}
        validate= {this.validate}
        validateOnChange={false}
      />
      <div>{this.state.userName}</div>
      </Fragment>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default connect()(withRouter(Login));