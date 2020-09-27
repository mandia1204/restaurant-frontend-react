import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
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

const Main = ({ classes }: WithStyles<typeof styles>) => (
  <main className={classes.main}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={DashboardContainer} />
        <PrivateRoute path="/settings" component={Settings} />
        <Route path="/info" component={CognitoUserInfo} />
        <Route path="/login" component={Login} />
      </Switch>
    </Suspense>
  </main>
);

export default withStyles(styles)(Main);
