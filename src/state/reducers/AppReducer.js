import { SHOW_NAV_LINKS, SHOW_FILTERS, UPDATE_DASHBOARD_FILTER  } from '../actions/AppActions';

const date = new Date();

const initialState = {
    showHeaderLinks: false,
    showFilters: false,
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
        default:
            return state;
    }
};