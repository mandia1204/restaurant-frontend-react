import { createReducer } from 'reduxsauce';
import Actions from '../actions/AppActions';

const { Types } = Actions;

const date = new Date();

const getDefaultFilters = () => ({ year: date.getFullYear(), month: date.getMonth() });

const INITIAL_STATE = {
  showHeaderLinks: false,
  showFilters: false,
  loggedUser: { name: '' },
  dashboardFilters: getDefaultFilters(),
};

const showNavLinks = (state, action) => ({ ...state, showHeaderLinks: action.showLinks });
const showFilters = (state, action) => ({ ...state, showFilters: action.show });
const updateDashboardFilter = (state, action) => ({
  ...state,
  dashboardFilters: {
    ...state.dashboardFilters,
    ...action.filter,
  },
});
const updateLoginData = (state, action) => ({
  ...state,
  loggedUser: action.data.user,
  showHeaderLinks: action.data.authenticated,
});

const fetchLoginData = state => state;

const logout = () => ({ ...INITIAL_STATE, dashboardFilters: getDefaultFilters() });

export const AppReducer = createReducer(INITIAL_STATE,
  {
    [Types.SHOW_NAV_LINKS]: showNavLinks,
    [Types.SHOW_FILTERS]: showFilters,
    [Types.UPDATE_DASHBOARD_FILTER]: updateDashboardFilter,
    [Types.UPDATE_LOGIN_DATA]: updateLoginData,
    [Types.LOGOUT]: logout,
    [Types.FETCH_LOGIN_DATA]: fetchLoginData,
  });
