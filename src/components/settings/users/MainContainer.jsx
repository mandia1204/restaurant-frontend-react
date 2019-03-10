import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../state/actions/UserActions';
import UsersTable from './UsersTable';
import SearchFilters from './SearchFilters';

class MainContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <SearchFilters />
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
