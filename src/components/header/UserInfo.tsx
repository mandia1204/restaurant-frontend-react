import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { LoggedUser } from '../../types/AppStore';

interface Props {
  logout: () => void;
  user: LoggedUser;
}

function UserInfo({ logout, user }: Props) {
  return (
    <Grid item id="userInfo">
      <Box component="span" sx={{ color: 'grey.A100', mr: 1 }}>
        User: {user.name}
      </Box>
      <Button color="secondary" variant="outlined" onClick={logout}>
        Logout
      </Button>
    </Grid>
  );
}

export default UserInfo;
