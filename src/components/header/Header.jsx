import React, { Fragment }from 'react';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Filters from './Filters';
import UserInfo from './UserInfo';
import Menu from './Menu';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import FiltersPopup from './FiltersPopup';

const Header = ({showHeaderLinks, showFilters, dashboardFilters, onFiltersChange, logout}) => {
    return (
    <AppBar position="static">
        <Toolbar>
            <Grid container spacing={8}>
                <Grid item xs>
                    { showHeaderLinks && <NavBar /> }  
                </Grid>
                <Grid item xs={6}>
                    { showHeaderLinks && showFilters && 
                        <Fragment>
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
                        </Fragment>
                    }    
                </Grid>
                <Grid item xs>
                    { showHeaderLinks && 
                    <Grid container justify="flex-end">
                        <Hidden smDown>
                            <UserInfo logout={logout} />
                        </Hidden>
                        <Hidden mdUp>
                            <Grid item>
                                <Menu />
                            </Grid>
                        </Hidden>
                    </Grid>
                    }
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>);
};

Header.propTypes = {
    showHeaderLinks: PropTypes.bool.isRequired,
    showFilters: PropTypes.bool.isRequired,
    dashboardFilters: PropTypes.object.isRequired,
    onFiltersChange: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

export default Header;