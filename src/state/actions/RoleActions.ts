import { createActions } from 'reduxsauce';
import { Role } from '../../types/User';

interface RoleActions {
  receiveRoles(users: Role[]): any;
  fetchRoles(): any;
}

const { Types, Creators } = createActions<any, RoleActions>({
  receiveRoles: ['roles'],
  fetchRoles: null,
}, { prefix: '' });

const Actions = {
  Types,
  Creators,
};

export default Actions;
