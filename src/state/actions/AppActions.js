import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  showNavLinks: ['showLinks'],
  showFilters: ['show'],
  updateDashboardFilter: ['filter'],
  updateLoginData: ['data'],
  fetchLoginData: null,
  logout: null,
}, {});

const Actions = {
  Types,
  Creators,
};

export default Actions;
