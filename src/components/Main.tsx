import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Home from './home/Home';
import DashboardContainer from './dashboard/DashboardContainer';
import Settings from './settings/Main';
import PrivateRoute from './routing/PrivateRoute';
import Login from './login/Login';

const styles = createStyles({
  main: {
    padding: '5px 10px 0 10px',
  },
});

const Main = ({ classes }: WithStyles<typeof styles>) => (

  <main className={classes.main}>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/dashboard" component={DashboardContainer} />
      <PrivateRoute path="/settings" component={Settings} />
      <Route path="/login" component={Login} />
    </Switch>
  </main>
);

export default withStyles(styles)(Main);
