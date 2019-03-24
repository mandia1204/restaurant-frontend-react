// @ts-ignore
import { createReducer } from 'reduxsauce';
import Actions from '../actions/AppActions';
import AppState from '../../types/AppState';
import DashboardFilters from '../../types/DashboardFilters';

const { Types } = Actions;
const date = new Date();

const getDefaultFilters = (): DashboardFilters => ({ year: date.getFullYear(), month: date.getMonth() });

const INITIAL_STATE: AppState = {
  showHeaderLinks: false,
  showFilters: false,
  loggedUser: { name: '' },
  dashboardFilters: getDefaultFilters(),
};

const showNavLinks = (state: AppState, action: any): AppState => ({ ...state, showHeaderLinks: action.showLinks });
const showFilters = (state: AppState, action: any): AppState => ({ ...state, showFilters: action.show });
const updateDashboardFilter = (state: AppState, action: any): AppState => ({
  ...state,
  dashboardFilters: {
    ...state.dashboardFilters,
    ...action.filter,
  },
});
const updateLoginData = (state: AppState, action: any): AppState => ({
  ...state,
  loggedUser: action.data.user,
  showHeaderLinks: action.data.authenticated,
});

const fetchLoginData = (state: AppState): AppState => state;

const logout = (): AppState => ({ ...INITIAL_STATE, dashboardFilters: getDefaultFilters() });

export const AppReducer = createReducer(INITIAL_STATE,
  {
    [Types.SHOW_NAV_LINKS]: showNavLinks,
    [Types.SHOW_FILTERS]: showFilters,
    [Types.UPDATE_DASHBOARD_FILTER]: updateDashboardFilter,
    [Types.UPDATE_LOGIN_DATA]: updateLoginData,
    [Types.LOGOUT]: logout,
    [Types.FETCH_LOGIN_DATA]: fetchLoginData,
  });
