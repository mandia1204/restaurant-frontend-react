import dashboardJson from '../../api/mocks/FullResponse';
import dashboardJson2 from '../../api/mocks/FullResponse2';

export const GET_DASHBOARD = 'GET_DASHBOARD';
export const ADD_CHART = 'ADD_CHART';
export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD';


const asyncOperation = (filters) => { // eslint-disable-line no-unused-vars
    return new Promise((resolve) => {
        if(filters.year){
            setTimeout(function(){ resolve(dashboardJson2); }, 100);
        }else{
            setTimeout(function(){ resolve(dashboardJson); }, 100);
        }
    });
};

export const fetchDashboard = filters => dispatch => {
    return asyncOperation(filters).then(dashboard => dispatch(receiveDashboard(dashboard)));
};

export const getDashboard = () => {
    return { type: GET_DASHBOARD };
};

export const receiveDashboard = (dashboard) => {
    return { type: RECEIVE_DASHBOARD, dashboard };
};

export const addChart = (chart) => {
    return { type: ADD_CHART, chart };
};