import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const UserInfo = ({logout}) => (
    <Grid item>
        <label>User: </label>
        <label>mandia1204</label>
        <Button onClick={logout}>Logout</Button>
    </Grid>
);

UserInfo.propTypes = {
    logout: PropTypes.func
  };

export default UserInfo;