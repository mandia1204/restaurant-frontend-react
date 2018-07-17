import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthClient from '../../api/security/AuthClient';

const authClient = AuthClient();
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (authClient.isAuthenticated() ? (
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
