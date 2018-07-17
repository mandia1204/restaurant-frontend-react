import React from 'react';
import PropTypes from 'prop-types';
import withNewProps from './withNewProps';

const BaseFuncComponent = ({ loggedIn, user, info }) => (
  <div>
    { `${loggedIn} : ${user} - ${info}` }
  </div>
);

BaseFuncComponent.propTypes = {
  loggedIn: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default withNewProps(BaseFuncComponent);
