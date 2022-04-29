import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Settings from './settings/Main';
import PrivateRoute from './routing/PrivateRoute';
import Login from './login/Login';
import CognitoUserInfo from './user/CognitoUserInfo';

const styles = createStyles({
  main: {
    padding: '5px 10px 0 10px',
  },
});

const Home = lazy(() => import('./home/Home'));
const DashboardContainer = lazy(() => import('./dashboard/DashboardContainer'));

function Main({ classes }: WithStyles<typeof styles>) {
  return (
    <main className={classes.main}>
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
            path="/settings"
            element={(
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            )}
          />
          <Route
            path="/settings"
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
    </main>
  );
}

export default withStyles(styles)(Main);
