import React from 'react';
import { Navigate, RouteProps, useLocation } from 'react-router-dom';
import SecurityService from '../../services/SecurityService';

const securityService = SecurityService();

export interface Props extends RouteProps {
  component: React.ComponentType<any>;
}

function PrivateRoute({ children }: { children: JSX.Element }) {
  const location = useLocation();

  if (!securityService.isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default PrivateRoute;
