import React from 'react';
import { Route, Navigate , RouteProps } from 'react-router-dom';
import SecurityService from '../../services/SecurityService';

const securityService = SecurityService();

export interface Props extends RouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => (
  <Route
    {...rest}
    children={(props : any) => (securityService.isAuthenticated()
      ? (<Component {...props} />) : (
        <Navigate
          replace
          to='/login'
          state={props.location}
        />
      ))}
  />
);

export default PrivateRoute;
