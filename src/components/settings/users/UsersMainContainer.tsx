import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Actions from '../../../state/actions/UserActions';
import UsersTable from './UsersTable';
import SearchFilters from './SearchFilters';
import AddUser from './AddUser';
import User from '../../../types/User';

interface Props {
  dispatch: Dispatch<any>;
  users: User[];
}

interface State {
  userNameFilter: string;
  isAdminFilter: boolean;
}

class UsersMainContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { userNameFilter: '', isAdminFilter: false };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(Actions.Creators.fetchUsers());
  }

  updateFiltersState = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name } = target;
    let { value } : any = target;
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  filterUsers = (users:User[]) => {
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
          <Grid item xs={2}><AddUser /></Grid>
        </Grid>
        <UsersTable users={this.filterUsers(users)} />
      </div>
    );
  }
}

const mapStateToProps = (state:any) => {
  const { users } = state;
  return {
    users,
  };
};

export default connect(mapStateToProps)(UsersMainContainer);
