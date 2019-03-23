import React from 'react';
import withNewProps from './withNewProps';

class BaseComponent extends React.Component {
  mytest() { //eslint-disable-line
    console.log('mytest'); //eslint-disable-line
  }

  render() {
    const { loggedIn, user, info } = this.props; //eslint-disable-line
    return (
      <div>
        { `${loggedIn} : ${user} - ${info}` }
      </div>
    );
  }
}

export default withNewProps(BaseComponent);
