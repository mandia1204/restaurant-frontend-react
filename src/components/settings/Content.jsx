import React from 'react';
import { Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import PrivateRoute from '../routing/PrivateRoute';
import UsersMainContainer from './users/UsersMainContainer';
import Groups from './groups/Main';

const styles = {
  main: {
    padding: '5px 10px 0 10px',
  },
};

const Content = ({ classes }) => (

  <main className={classes.main}>
    <Switch>
      <PrivateRoute path="/settings/users" component={UsersMainContainer} />
      <PrivateRoute path="/settings/groups" component={Groups} />
    </Switch>
  </main>
);

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
