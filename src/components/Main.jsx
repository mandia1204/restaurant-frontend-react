import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Home from './home/Home';
import DashboardContainer from './dashboard/DashboardContainer';
import PrivateRoute from './routing/PrivateRoute';
import Login from './login/Login';

const styles = {
  main: {
    padding: '5px 10px 0 10px',
  },
};

const Main = ({ classes }) => (

  <main className={classes.main}>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/dashboard" component={DashboardContainer} />
      <Route path="/login" component={Login} />
    </Switch>
  </main>
);

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
