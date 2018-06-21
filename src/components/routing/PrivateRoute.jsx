import React from 'react';
import { Route, Redirect  } from 'react-router-dom';
import AuthClient from '../../api/security/AuthClient';
import PropTypes from 'prop-types';

const authClient = AuthClient();
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authClient.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

  PrivateRoute.propTypes = {
    location: PropTypes.object,
    component: PropTypes.func
  };

  export default PrivateRoute;