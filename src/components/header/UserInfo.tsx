import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

interface Props {
  logout: () => void;
  user: any;
}

function UserInfo({ logout, user }: Props) {
  return (
    <Grid item>
      <span>
        User: {user.name}
      </span>
      <Button onClick={logout}>
        Logout
      </Button>
    </Grid>
  );
}

export default UserInfo;
