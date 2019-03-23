import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface Props {
  logout: () => void;
  user: any;
}

const UserInfo = ({ logout, user }: Props) => (
  <Grid item>
    <span>
      { 'User:' }
    </span>
    <span>
      {user.name}
    </span>
    <Button onClick={logout}>
      { 'Logout' }
    </Button>
  </Grid>
);

export default UserInfo;
