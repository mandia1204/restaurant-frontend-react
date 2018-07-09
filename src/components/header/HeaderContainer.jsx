import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import NavBar from './NavBar';
import Filters from './Filters';
import UserInfo from './UserInfo';
import AuthClient from '../../api/security/AuthClient';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNavLinks, updateDashboardFilter } from '../../state/actions/AppActions';
import { fetchDashboard } from '../../state/actions/DashboardActions';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { Ops } from '../../util/Constants';

class HeaderContainer extends Component {
    constructor(props){
      super(props);
      this.authClient = AuthClient();
      this.logout = this.logout.bind(this);
    }

    logout() {
      this.authClient.logout();
      this.props.history.push('/login');
      this.props.dispatch(showNavLinks(false));
    }

    onFiltersChange = (filter) => {
      const filters = {...this.props.appState.dashboardFilters, ...filter, ops: Ops.all };
      this.props.dispatch(updateDashboardFilter(filter));
      this.props.dispatch(fetchDashboard(filters));
    }

    render() {
      return (
        <AppBar position="static">
            <Toolbar>
              <Grid container spacing={8}>
                <Grid item xs>
                  { this.props.appState.showHeaderLinks && <NavBar /> }  
                </Grid>
                <Grid item xs={6}>
                  { this.props.appState.showHeaderLinks && this.props.appState.showFilters && 
                    <Grid container alignItems="center" style={{ height: '100%' }}>
                      <Filters values={this.props.appState.dashboardFilters} filtersChange={this.onFiltersChange} />
                    </Grid> 
                  }
                </Grid>
                <Grid item xs>
                  { this.props.appState.showHeaderLinks && 
                    <Grid container justify="flex-end">
                      <UserInfo logout={this.logout} /> 
                    </Grid>
                  }
                </Grid>
              </Grid>
            </Toolbar>
        </AppBar>
      );
    }
  }

  const mapStateToProps = state => {
    const { dashboard, appState } = state;
    return {
      dashboard,
      appState
    };
  };

  HeaderContainer.propTypes = {
    history: PropTypes.object,
    dashboard: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  export default connect(mapStateToProps)(withRouter(HeaderContainer));