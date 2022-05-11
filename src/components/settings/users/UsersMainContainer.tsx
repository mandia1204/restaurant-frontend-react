import React, { Dispatch, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@mui/material/Grid';
import { fetchUsers } from '../../../state/reducers/UsersSlice';
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

function UsersMainContainer(props: Props) {
  const [state, setState] = useState<State>({ userNameFilter: '', isAdminFilter: false });

  useEffect(() => {
    const { dispatch } = props;
    dispatch(fetchUsers());
  }, []);

  const updateFiltersState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name } = target;
    let { value }: any = target;
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { userNameFilter, isAdminFilter } = state;

  const filterUsers = (users: User[]) => users.filter((u) => u.userName.indexOf(userNameFilter) !== -1
        && (!isAdminFilter || (isAdminFilter && u.isAdmin === true)));

  const { users } = props;

  return (
    <div>
      <h2>Users</h2>
      <Grid alignItems="flex-end" container>
        <Grid item xs={10}>
          <SearchFilters
            userNameFilter={userNameFilter}
            isAdminFilter={isAdminFilter}
            onChange={updateFiltersState}
          />
        </Grid>
        <Grid item xs={2}><AddUser /></Grid>
      </Grid>
      <UsersTable users={filterUsers(users)} />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  const { users } = state;
  return {
    users,
  };
};

export default connect(mapStateToProps)(UsersMainContainer);
