// @ts-ignore
import { createReducer } from 'reduxsauce';
import Actions from '../actions/AppActions';
import { AppState } from '../../types/AppStore';
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

interface ReduceMethod {
  (state: AppState, action: any): AppState;
}

const showNavLinks: ReduceMethod = (state, action) => ({ ...state, showHeaderLinks: action.showLinks });
const showFilters: ReduceMethod = (state, action) => ({ ...state, showFilters: action.show });
const updateDashboardFilter: ReduceMethod = (state, action) => ({
  ...state,
  dashboardFilters: {
    ...state.dashboardFilters,
    ...action.filter,
  },
});
const updateLoginData: ReduceMethod = (state, action) => ({
  ...state,
  loggedUser: action.data.user,
  showHeaderLinks: action.data.authenticated,
});

const fetchLoginData: ReduceMethod = (state) => state;

const logout: ReduceMethod = () => ({ ...INITIAL_STATE, dashboardFilters: getDefaultFilters() });

export const AppReducer = createReducer(
  INITIAL_STATE,
  {
    [Types.SHOW_NAV_LINKS]: showNavLinks,
    [Types.SHOW_FILTERS]: showFilters,
    [Types.UPDATE_DASHBOARD_FILTER]: updateDashboardFilter,
    [Types.UPDATE_LOGIN_DATA]: updateLoginData,
    [Types.LOGOUT]: logout,
    [Types.FETCH_LOGIN_DATA]: fetchLoginData,
  },
);
