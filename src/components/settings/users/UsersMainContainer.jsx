import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Actions from '../../../state/actions/UserActions';
import UsersTable from './UsersTable';
import SearchFilters from './SearchFilters';
import AddUser from './AddUser';

class UsersMainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { userNameFilter: '', isAdminFilter: false };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(Actions.Creators.fetchUsers());
  }

  updateFiltersState = (event) => {
    const { target } = event;
    const { name } = target;
    let { value } = target;
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }
    this.setState({ [name]: value });
  }

  filterUsers = (users) => {
    const { userNameFilter, isAdminFilter } = this.state;
    return users.filter(u => u.userName.indexOf(userNameFilter) !== -1
        && (!isAdminFilter || (isAdminFilter && u.isAdmin === true)));
  }

  render() {
    const { users } = this.props;
    const { userNameFilter, isAdminFilter } = this.state;
    return (
      <div>
        <h2>Users</h2>
        <Grid alignItems="flex-end" container>
          <Grid item xs={10}>
            <SearchFilters
              userNameFilter={userNameFilter}
              isAdminFilter={isAdminFilter}
              onChange={this.updateFiltersState}
            />
          </Grid>
          <Grid item xs={2}>
            <AddUser />
          </Grid>
        </Grid>
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
