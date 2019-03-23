import React from 'react';
import { Switch } from 'react-router-dom';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import PrivateRoute from '../routing/PrivateRoute';
import UsersMainContainer from './users/UsersMainContainer';
import Groups from './groups/Main';

const styles = createStyles({
  main: {
    padding: '5px 10px 0 10px',
  },
});

interface Props extends WithStyles<typeof styles> {
  className?: string
}

const Content = (props: Props) => {
  const { classes, className } = props;
  return (
    <main className={`${classes.main} ${className}`}>
      <Switch>
        <PrivateRoute path="/settings/users" component={UsersMainContainer} />
        <PrivateRoute path="/settings/groups" component={Groups} />
      </Switch>
    </main>
  );
};

export default withStyles(styles)(Content);
