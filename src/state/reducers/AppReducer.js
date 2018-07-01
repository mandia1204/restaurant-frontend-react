import { SHOW_NAV_LINKS, SHOW_FILTERS } from '../actions/AppActions';

const initialState = {
    showHeaderLinks: false,
    showFilters:false
};

export const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_NAV_LINKS:
            return {...state, showHeaderLinks: action.showLinks };
        case SHOW_FILTERS:
            return {...state, showFilters: action.show };
        default:
            return state;
    }
};