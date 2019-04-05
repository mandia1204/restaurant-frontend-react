import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  receiveRoles: ['roles'],
  fetchRoles: null,
}, {});

const Actions = {
  Types,
  Creators,
};

export default Actions;
