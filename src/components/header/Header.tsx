import React from 'react';
// TODO: FIX
// import Hidden from '@material-ui/core/Hidden';
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

function Header({ showHeaderLinks, showFilters, dashboardFilters, onFiltersChange, logout, loggedUser }: Props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={8}>
          <Grid item xs> { showHeaderLinks && <NavBar /> } </Grid>
          <Grid item xs={6}>
            { showHeaderLinks && showFilters
                        && (
                          <>
                            <Grid container alignItems="center" style={{ height: '100%' }}>
                              <Filters values={dashboardFilters} filtersChange={onFiltersChange} />
                            </Grid>
                            {/* <Hidden mdUp>
                              <Grid item>
                                <FiltersPopup values={dashboardFilters} filtersChange={onFiltersChange} />
                              </Grid>
                            </Hidden> */}
                          </>
                        )}
          </Grid>
          <Grid item xs>
            { showHeaderLinks
                    && (
                      <Grid container justifyContent="flex-end">
                        {/* <Hidden smDown>
                          <UserInfo logout={logout} user={loggedUser} />
                        </Hidden> */}
                        <Grid item>
                          <Menu />
                        </Grid>
                      </Grid>
                    )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
