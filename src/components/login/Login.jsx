import React from 'react';
import AuthClient from '../../api/security/AuthClient';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    const authClient = AuthClient();
    authClient.authenticate();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        Login please <br/>
        <Button color="primary" onClick={this.login}>
          Login
        </Button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object
};

export default withRouter(Login);