// @ts-ignore
import { createReducer } from 'reduxsauce';
import Actions from '../actions/UserActions';
import User from '../../types/User';

const { Types } = Actions;
const INITIAL_STATE: User[] = [];

interface ReduceMethod {
  (state: User[], action: any): User[];
}

const getUsers: ReduceMethod = state => state;
const fetchUsers: ReduceMethod = state => state;
const receiveUsers: ReduceMethod = (state, action) => action.users;
const saveUserSuccess: ReduceMethod = (state, action) => ([...state, action.user]);
const updateUserSuccess: ReduceMethod = (state, action) => (state.map(u => (u.id === action.user.id ? action.user : u)));

export const UserReducer = createReducer(INITIAL_STATE,
  {
    [Types.GET_USERS]: getUsers,
    [Types.RECEIVE_USERS]: receiveUsers,
    [Types.FETCH_USERS]: fetchUsers,
    [Types.SAVE_USER_SUCCESS]: saveUserSuccess,
    [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
  });
