export const GET_DASHBOARD = 'GET_DASHBOARD';
export const ADD_CHART = 'ADD_CHART';
export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD';


const asyncOperation = (filters) => { // eslint-disable-line no-unused-vars
    return new Promise((resolve) => {
        resolve({
                bars: [{name: 'bar1'}, {name: 'bar2'}],
                charts: [{name: 'chart1'}, {name: 'chart1'}]
        });
    });
};

export const fetchDashboard = filters => dispatch => {
    return asyncOperation(filters).then((dashboard) => {
        dispatch(receiveDashboard(dashboard));
    });
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