import React from 'react';
import withNewProps from './withNewProps';

const BaseFuncComponent = ({ loggedIn, user, info }) => ( //eslint-disable-line
  <div>
    { `${loggedIn} : ${user} - ${info}` }
  </div>
);

export default withNewProps(BaseFuncComponent);
