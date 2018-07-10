import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const UserInfo = ({logout, user}) => (
    <Grid item>
        <label>User: </label>
        <label>{user.name}</label>
        <Button onClick={logout}>Logout</Button>
    </Grid>
);

UserInfo.propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

export default UserInfo;