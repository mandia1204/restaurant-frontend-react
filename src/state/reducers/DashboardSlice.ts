import { createSlice, createAction } from '@reduxjs/toolkit';
import { DashboardModel } from '../../types/Dashboard';
import DashboardFilters from '../../types/DashboardFilters';

const INITIAL_STATE: DashboardModel = {
  cards: {},
  charts: [],
  anulaciones: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: INITIAL_STATE,
  reducers: {
    fetchDashboard(state) {
      return state;
    },
    receiveDashboard(_, action) {
      return action.payload;
    },
  },
});

export const fetchDashboard = createAction('dashboard/fetchDashboard', (filters: DashboardFilters) => ({ payload: filters }));

export const { receiveDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
