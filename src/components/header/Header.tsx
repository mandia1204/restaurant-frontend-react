import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Filters from './Filters';
import UserInfo from './UserInfo';
import Menu from './Menu';
import NavBar from './NavBar';
import FiltersPopup from './FiltersPopup';
import DashboardFilters from '../../types/DashboardFilters';

interface Props {
  showHeaderLinks: boolean;
  showFilters: boolean;
  dashboardFilters: DashboardFilters;
  onFiltersChange: (f: DashboardFilters) => void;
  logout: () => void;
  loggedUser: any;
}

const Header = ({ showHeaderLinks, showFilters, dashboardFilters, onFiltersChange, logout, loggedUser }: Props) => (
  <AppBar position="static">
    <Toolbar>
      <Grid container spacing={8}>
        <Grid item xs> { showHeaderLinks && <NavBar /> } </Grid>
        <Grid item xs={6}>
          { showHeaderLinks && showFilters
                        && (
                          <>
                            <Hidden smDown>
                              <Grid container alignItems="center" style={{ height: '100%' }}>
                                <Filters values={dashboardFilters} filtersChange={onFiltersChange} />
                              </Grid>
                            </Hidden>
                            <Hidden mdUp>
                              <Grid item>
                                <FiltersPopup values={dashboardFilters} filtersChange={onFiltersChange} />
                              </Grid>
                            </Hidden>
                          </>
                        )}
        </Grid>
        <Grid item xs>
          { showHeaderLinks
                    && (
                      <Grid container justify="flex-end">
                        <Hidden smDown>
                          <UserInfo logout={logout} user={loggedUser} />
                        </Hidden>
                        <Hidden mdUp>
                          <Grid item>
                            <Menu />
                          </Grid>
                        </Hidden>
                      </Grid>
                    )}
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;
