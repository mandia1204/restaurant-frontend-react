import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import PrivateRoute from '../routing/PrivateRoute';
import UsersMainContainer from './users/UsersMainContainer';
import ManageUserContainer from './users/manage/ManageUserContainer';
import Groups from './groups/Main';

const styles = createStyles({
  main: {
    padding: '5px 10px 0 10px',
  },
});

interface Props extends WithStyles<typeof styles> {
  className?: string;
}

function Content(props: Props) {
  const { classes, className } = props;
  return (
    <main className={`${classes.main} ${className}`}>
      <Routes>
        <Route
          path="/settings/users"
          element={(
            <PrivateRoute>
              <UsersMainContainer />
            </PrivateRoute>
          )}
        />
        <Route
          path="/settings/users/manage"
          element={(
            <PrivateRoute>
              <ManageUserContainer />
            </PrivateRoute>
          )}
        />
        <Route
          path="/settings/users/manage/:userId"
          element={(
            <PrivateRoute>
              <ManageUserContainer />
            </PrivateRoute>
          )}
        />
        <Route
          path="/settings/groups"
          element={(
            <PrivateRoute>
              <Groups />
            </PrivateRoute>
          )}
        />
      </Routes>
    </main>
  );
}

export default withStyles(styles)(Content);
