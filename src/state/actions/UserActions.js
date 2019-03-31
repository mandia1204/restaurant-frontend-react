import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  receiveUsers: ['users'],
  getUsers: null,
  fetchUsers: null,
  saveUser: ['user'],
  saveUserSuccess: ['user'],
  updateUser: ['user'],
  updateUserSuccess: ['user'],
}, {});

const Actions = {
  Types,
  Creators,
};

export default Actions;
