import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
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
                            <Grid sx={{ display: { sm: 'none', xl: 'block' } }} container alignItems="center" style={{ height: '100%' }}>
                              <Filters values={dashboardFilters} filtersChange={onFiltersChange} />
                            </Grid>
                            <Grid sx={{ display: { sm: 'block', md: 'none' } }} item>
                              <FiltersPopup values={dashboardFilters} filtersChange={onFiltersChange} />
                            </Grid>
                          </>
                        )}
          </Grid>
          <Grid item xs>
            { showHeaderLinks
                    && (
                      <Grid container justifyContent="flex-end">
                        <Grid sx={{ display: { sm: 'none', md: 'block' } }} item>
                          <UserInfo logout={logout} user={loggedUser} />
                        </Grid>

                        <Grid sx={{ display: { sm: 'block', md: 'none' } }} item>
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
