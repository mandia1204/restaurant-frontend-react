import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface Props {
  logout: () => void;
  user: any;
}

function UserInfo({ logout, user }: Props) {
  return (
    <Grid item>
      <span>
        User:
      </span>
      <span>
        {user.name}
      </span>
      <Button onClick={logout}>
        Logout
      </Button>
    </Grid>
  );
}

export default UserInfo;
