import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          { showHeaderLinks && <NavBar /> }
          { showHeaderLinks && showFilters && (
            <>
              <Box sx={{ display: { sm: 'none', xl: 'block' } }}>
                <Filters values={dashboardFilters} filtersChange={onFiltersChange} />
              </Box>
              <Box sx={{ display: { sm: 'block', md: 'none' } }}>
                <FiltersPopup values={dashboardFilters} filtersChange={onFiltersChange} />
              </Box>
            </>
          )}
          <Box sx={{ flexGrow: 1 }} />
          { showHeaderLinks
            && (
              <>
                <Box sx={{ display: { sm: 'none', md: 'block' } }}>
                  <UserInfo logout={logout} user={loggedUser} />
                </Box>
                <Box sx={{ display: { sm: 'block', md: 'none' } }}>
                  <Menu />
                </Box>
              </>
            )}
        </Toolbar>
      </AppBar>
    </Box>

  );
}

export default Header;
