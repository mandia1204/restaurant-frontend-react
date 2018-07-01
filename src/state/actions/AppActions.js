export const SHOW_NAV_LINKS = 'SHOW_NAV_LINKS';
export const SHOW_FILTERS = 'SHOW_FILTERS';

export const showNavLinks = (showLinks) => {
    return { type: SHOW_NAV_LINKS, showLinks };
};

export const showFilters = (show) => {
    return { type: SHOW_FILTERS, show };
};