import React from 'react';
// TODO: FIX
// import Hidden from '@mui/material/Hidden';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
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
                            {/* <Box
                              sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: 'center',
                                bgcolor: 'background.paper',
                                overflow: 'hidden',
                                borderRadius: '12px',
                                boxShadow: 1,
                                fontWeight: 'bold',
                              }}
                            /> */}
                            <Paper sx={{ display: { xl: 'none', xs: 'block' } }} />
                            <Grid container alignItems="center" style={{ height: '100%' }}>
                              <Filters values={dashboardFilters} filtersChange={onFiltersChange} />
                            </Grid>
                            <Grid item>
                              <FiltersPopup values={dashboardFilters} filtersChange={onFiltersChange} />
                            </Grid>
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
