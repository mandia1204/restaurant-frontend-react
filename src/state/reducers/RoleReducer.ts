import { createReducer } from 'reduxsauce';
import Actions from '../actions/RoleActions';
import { Role } from '../../types/User';

const { Types } = Actions;
const INITIAL_STATE: Role[] = [];

interface ReduceMethod {
  (state: Role[], action: any): Role[];
}

const fetchRoles: ReduceMethod = (state) => state;
const receiveRoles: ReduceMethod = (state, action) => action.roles;

export const RoleReducer = createReducer(INITIAL_STATE,
  {
    [Types.RECEIVE_ROLES]: receiveRoles,
    [Types.FETCH_ROLES]: fetchRoles,
  });
