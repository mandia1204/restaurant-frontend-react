import React from 'react';
import { Route, Navigate, RouteProps, useLocation } from 'react-router-dom';
import SecurityService from '../../services/SecurityService';

const securityService = SecurityService();

export interface Props extends RouteProps {
  component: React.ComponentType<any>;
}

function PrivateRoute({ component: Component, ...rest }: Props) {
  const location = useLocation();
  return (
    <Route
      {...rest}
      element={securityService.isAuthenticated() ? <Component /> : (
        <Navigate
          replace
          to="/login"
          state={location}
        />
      )}
    />
  );
}

export default PrivateRoute;
