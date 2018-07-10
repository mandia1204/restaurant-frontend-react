import { SHOW_NAV_LINKS, SHOW_FILTERS, UPDATE_DASHBOARD_FILTER, UPDATE_LOGIN_DATA, LOGOUT  } from '../actions/AppActions';

const date = new Date();

const getDefaultFilters = () =>({ year: date.getFullYear(), month: date.getMonth()});

const initialState = {
    showHeaderLinks: false,
    showFilters: false,
    loggedUser: { name: ''},
    dashboardFilters: getDefaultFilters()
};

export const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_NAV_LINKS:
            return {...state, showHeaderLinks: action.showLinks };
        case SHOW_FILTERS:
            return {...state, showFilters: action.show };
        case UPDATE_DASHBOARD_FILTER:
            return {...state, dashboardFilters: {...state.dashboardFilters, ...action.filter} };
        case UPDATE_LOGIN_DATA:
            return {...state, loggedUser: action.data.user, showHeaderLinks: action.data.authenticated}; 
        case LOGOUT: 
            return {...initialState, dashboardFilters: getDefaultFilters()}; 
        default:
            return state;
    }
};