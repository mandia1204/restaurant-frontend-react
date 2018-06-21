import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const UserInfo = (props) => (
    <div>
        <label>User: </label>
        <label>mandia1204</label>
        <Button onClick={props.logout}>Logout</Button>
    </div>
);

UserInfo.propTypes = {
    logout: PropTypes.func
  };

export default UserInfo;