import React from 'react';
import PropTypes from 'prop-types';
import withNewProps from './withNewProps';

class BaseComponent extends React.Component {
  mytest() { //eslint-disable-line
    console.log('mytest'); //eslint-disable-line
  }

  render() {
    const { loggedIn, user, info } = this.props;
    return (
      <div>
        { `${loggedIn} : ${user} - ${info}` }
      </div>
    );
  }
}

BaseComponent.propTypes = {
  loggedIn: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default withNewProps(BaseComponent);
