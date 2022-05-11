import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Settings from './settings/Main';
import PrivateRoute from './routing/PrivateRoute';
import Login from './login/Login';
import CognitoUserInfo from './user/CognitoUserInfo';

const Home = lazy(() => import('./home/Home'));
const DashboardContainer = lazy(() => import('./dashboard/DashboardContainer'));

function Main() {
  return (
    <Box component="main" sx={{ padding: '5px 10px 0 10px' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={(
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            )}
          />
          <Route
            path="/dashboard"
            element={(
              <PrivateRoute>
                <DashboardContainer />
              </PrivateRoute>
            )}
          />
          <Route
            path="/settings/*"
            element={(
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            )}
          />
          <Route
            path="/info"
            element={<CognitoUserInfo />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default Main;
