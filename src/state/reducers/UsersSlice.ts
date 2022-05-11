import { createSlice, createAction } from '@reduxjs/toolkit';
import User from '../../types/User';

const INITIAL_STATE: User[] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    receiveUsers(_, action) {
      return action.payload;
    },
    saveUserSuccess(state, action) {
      state.push(action.payload);
    },
    updateUserSuccess(state, action) {
      let user = state.filter((f) => f.id === action.payload.id)[0];
      // eslint-disable-next-line
      user = action.payload;
    },
    fetchUsers(state) {
      return state;
    },
  },
});

export const updateUser = createAction('users/updateUser', (user: User) => ({ payload: user }));

export const { receiveUsers, fetchUsers, saveUserSuccess, updateUserSuccess } = usersSlice.actions;
export default usersSlice.reducer;
