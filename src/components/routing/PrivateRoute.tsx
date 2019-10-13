import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import SecurityService from '../../services/SecurityService';

const securityService = SecurityService();

export interface Props extends RouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => (
  <Route
    {...rest}
    render={(props) => (securityService.isAuthenticated()
      ? (<Component {...props} />) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))}
  />
);

export default PrivateRoute;
