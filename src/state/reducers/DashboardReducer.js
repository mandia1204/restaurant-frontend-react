import { GET_DASHBOARD } from '../actions/DashboardActions';

const initialState = {
    dashboard: {
        bars: [{name: 'bar1'}, {name: 'bar2'}],
        charts: [{name: 'chart1'}, {name: 'chart1'}],
    },
};

export const DashboardReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DASHBOARD:
            return state;
        default:
            return state;
    }
};