export const GET_DASHBOARD = 'GET_DASHBOARD';
export const ADD_CHART = 'ADD_CHART';

export const getDashboard = () => {
    return { type: GET_DASHBOARD };
};

export const addChart = (chart) => {
    return { type: ADD_CHART, chart };
};