import { createActions } from 'reduxsauce';
import User from '../../types/User';

interface UserActions {
  receiveUsers(users: User[]): any;
  getUsers(): any;
  fetchUsers(): any;
  saveUser(user: User): any;
  saveUserSuccess(user: User): any;
  updateUser(user: User): any;
  updateUserSuccess(user: User): any;
}

const { Types, Creators } = createActions<any, UserActions>({
  receiveUsers: ['users'],
  getUsers: null,
  fetchUsers: null,
  saveUser: ['user'],
  saveUserSuccess: ['user'],
  updateUser: ['user'],
  updateUserSuccess: ['user'],
}, { prefix: '' });

const Actions = {
  Types,
  Creators,
};

export default Actions;
