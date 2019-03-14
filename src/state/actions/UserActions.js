import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  receiveUsers: ['users'],
  getUsers: null,
}, {});

const Actions = {
  Types,
  Creators,
};

export default Actions;
