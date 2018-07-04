export const SHOW_NAV_LINKS = 'SHOW_NAV_LINKS';
export const SHOW_FILTERS = 'SHOW_FILTERS';
export const UPDATE_DASHBOARD_FILTER = 'UPDATE_DASHBOARD_FILTER';

export const showNavLinks = (showLinks) => {
    return { type: SHOW_NAV_LINKS, showLinks };
};

export const showFilters = (show) => {
    return { type: SHOW_FILTERS, show };
};

export const updateDashboardFilter = (filter) => {
    return { type: UPDATE_DASHBOARD_FILTER, filter };
};