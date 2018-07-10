import { SHOW_NAV_LINKS, SHOW_FILTERS, UPDATE_DASHBOARD_FILTER, UPDATE_LOGIN_DATA, LOGOUT  } from '../actions/AppActions';

const date = new Date();

const initialState = {
    showHeaderLinks: false,
    showFilters: false,
    loggedUser: { name: ''},
    dashboardFilters: { year: date.getFullYear(), month: date.getMonth()}
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
            return {...state, loggedUser: { name: ''}, showHeaderLinks: false}; 
        default:
            return state;
    }
};