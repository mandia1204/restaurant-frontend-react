import React from 'react';
import AuthClient from '../../api/security/AuthClient';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNavLinks } from '../../state/actions/AppActions';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    const authClient = AuthClient();
    authClient.authenticate();
    this.props.history.push('/');
    this.props.dispatch(showNavLinks(true));
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

const mapStateToProps = state => {
  const { appState } = state;
  return {
    appState
  };
};

Login.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(withRouter(Login));