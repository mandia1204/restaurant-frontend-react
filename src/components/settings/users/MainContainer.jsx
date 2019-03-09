import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../state/actions/UserActions';
import UsersTable from './UsersTable';

class MainContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <h2>
          users page
        </h2>
        <div>
          <TextField
            label="User Name"
            margin="normal"
          />
        </div>
        <UsersTable users={users} />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    users,
  };
};

MainContainer.propTypes = {
  users: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MainContainer);
