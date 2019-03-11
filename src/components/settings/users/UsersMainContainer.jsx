import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../state/actions/UserActions';
import UsersTable from './UsersTable';
import SearchFilters from './SearchFilters';

class UsersMainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { userNameFilter: '' };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
  }

  updateFiltersState = (event) => {
    const { target } = event;
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  filterUsers = (users) => {
    const { userNameFilter } = this.state;
    return users.filter(u => u.userName.indexOf(userNameFilter) !== -1);
  }

  render() {
    const { users } = this.props;
    const { userNameFilter } = this.state;
    return (
      <div>
        <h2>Users</h2>
        <SearchFilters userNameFilter={userNameFilter} onChange={this.updateFiltersState} />
        <UsersTable users={this.filterUsers(users)} />
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

UsersMainContainer.propTypes = {
  users: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(UsersMainContainer);
