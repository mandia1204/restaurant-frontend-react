import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SecurityService from '../../services/SecurityService';

const securityService = SecurityService();
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (securityService.isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))
      }
  />
);

PrivateRoute.propTypes = {
  location: PropTypes.object,
  component: PropTypes.func.isRequired,
};

PrivateRoute.defaultProps = {
  location: {},
};

export default PrivateRoute;
