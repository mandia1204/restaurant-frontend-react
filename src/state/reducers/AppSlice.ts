import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, LoggedUser } from '../../types/AppStore';
import DashboardFilters from '../../types/DashboardFilters';

const date = new Date();
const getDefaultFilters = (): DashboardFilters => ({ year: date.getFullYear(), month: date.getMonth() });

const INITIAL_STATE: AppState = {
  showHeaderLinks: false,
  showFilters: false,
  loggedUser: { name: '', authenticated: false },
  dashboardFilters: getDefaultFilters(),
  theme: 'light'
};

const appSlice = createSlice({
  name: 'appState',
  initialState: INITIAL_STATE,
  reducers: {
    showNavLinks(state, action) {
      state.showHeaderLinks = action.payload;
    },
    showFilters(state, action) {
      state.showFilters = action.payload;
    },
    updateDashboardFilter(state, action) {
      if (action.payload.year) {
        state.dashboardFilters.year = action.payload.year;
      }
      if (action.payload.month) {
        state.dashboardFilters.month = action.payload.month;
      }
    },
    setTheme(state, action){
      state.theme = action.payload;
    },
    updateLoginData(state, action: PayloadAction<LoggedUser>) {
      state.loggedUser.name = action.payload.name;
      state.showHeaderLinks = action.payload.authenticated;
    },
    fetchLoginData(state) {
      return state;
    },
    logout(state) {
      return { ...INITIAL_STATE, theme: state.theme, dashboardFilters: getDefaultFilters() };
    },
  },
});

export const { showNavLinks, showFilters, setTheme, updateDashboardFilter, updateLoginData, fetchLoginData, logout } = appSlice.actions;
export default appSlice.reducer;
