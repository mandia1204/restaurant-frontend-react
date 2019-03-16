import { createReducer } from 'reduxsauce';
import Actions from '../actions/UserActions';

const { Types } = Actions;
const INITIAL_STATE = [];

const getUsers = state => state;
const fetchUsers = state => state;
const receiveUsers = (state, action) => action.users;

export const UserReducer = createReducer(INITIAL_STATE,
  {
    [Types.GET_USERS]: getUsers,
    [Types.RECEIVE_USERS]: receiveUsers,
    [Types.FETCH_USERS]: fetchUsers,
  });
