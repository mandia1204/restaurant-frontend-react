import { GET_DASHBOARD, ADD_CHART } from '../actions/DashboardActions';

const initialState = {
    bars: [{name: 'bar1'}, {name: 'bar2'}],
    charts: [{name: 'chart1'}, {name: 'chart1'}],
};

export const DashboardReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DASHBOARD:
            return state;
        case ADD_CHART:
            return {...state, charts: [...state.charts, action.chart] };
        default:
            return state;
    }
};