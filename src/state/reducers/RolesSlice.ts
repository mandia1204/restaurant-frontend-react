import { createSlice } from '@reduxjs/toolkit';
import { Role } from '../../types/User';

const INITIAL_STATE: Role[] = [];

const rolesSlice = createSlice({
  name: 'roles',
  initialState: INITIAL_STATE,
  reducers: {
    receiveRoles(_, action) {
      return action.payload;
    },
    fetchRoles(state) {
      return state;
    },
  },
});

export const { receiveRoles, fetchRoles } = rolesSlice.actions;
export default rolesSlice.reducer;
