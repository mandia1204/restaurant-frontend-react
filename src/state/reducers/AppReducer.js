import { SHOW_NAV_LINKS } from '../actions/AppActions';

const initialState = {
    showHeaderLinks: false
};

export const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_NAV_LINKS:
            return {...state, showHeaderLinks: action.showLinks };
        default:
            return state;
    }
};