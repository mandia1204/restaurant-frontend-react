import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDashboard } from '../../state/actions/DashboardActions';
import { showFilters } from '../../state/actions/AppActions';
import { ChartModelBuilder } from './builders/ChartModelBuilder';
import { CardModelBuilder } from './builders/CardModelBuilder';
import { AnulacionesFormatter } from './formatters/AnulacionesFormatter';
import { Ops } from '../../util/Constants';
import Dashboard from './Dashboard';

class DashboardContainer extends Component {

  constructor(props){
    super(props);
    this.chartModelBuilder = ChartModelBuilder();
    this.cardModelBuilder = CardModelBuilder();
    this.anulacionesFormatter = AnulacionesFormatter();
  }

  componentDidMount() {
    const filters = {...this.props.appState.dashboardFilters, ops: Ops.all };
    this.props.dispatch(fetchDashboard(filters));
    this.props.dispatch(showFilters(true));
  }

  componentWillUnmount() {
    this.props.dispatch(showFilters(false));
  }
  
  render() {
    const chartModel = this.chartModelBuilder.build(this.props.dashboard.charts);
    const cardModel = this.cardModelBuilder.build(this.props.dashboard.cards);
    const anulaciones  = this.anulacionesFormatter.format(this.props.dashboard.anulaciones);
    return (
        <Dashboard chartModel={chartModel} anulaciones={anulaciones} cardModel={cardModel} />
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

DashboardContainer.propTypes = {
  dashboard: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(DashboardContainer);