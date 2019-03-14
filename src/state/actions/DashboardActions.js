import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  getDashboard: null,
  receiveDashboard: ['dashboard'],
}, {});

const Actions = {
  Types,
  Creators,
};

export default Actions;
