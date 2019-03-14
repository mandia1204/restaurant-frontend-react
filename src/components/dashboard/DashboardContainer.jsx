import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDashboard } from '../../state/actions/DashboardSagaActions';
import Actions from '../../state/actions/AppActions';
import { ChartModelBuilder } from './builders/ChartModelBuilder';
import { CardModelBuilder } from './builders/CardModelBuilder';
import { AnulacionesFormatter } from './formatters/AnulacionesFormatter';
import { Ops } from '../../util/Constants';
import Dashboard from './Dashboard';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.chartModelBuilder = ChartModelBuilder();
    this.cardModelBuilder = CardModelBuilder();
    this.anulacionesFormatter = AnulacionesFormatter();
  }

  componentDidMount() {
    const { appState, dispatch } = this.props;
    const filters = { ...appState.dashboardFilters, ops: Ops.all };
    dispatch(fetchDashboard(filters));
    dispatch(Actions.Creators.showFilters(true));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(Actions.Creators.showFilters(false));
  }

  render() {
    const { dashboard } = this.props;
    const chartModel = this.chartModelBuilder.build(dashboard.charts);
    const cardModel = this.cardModelBuilder.build(dashboard.cards);
    const anulaciones = this.anulacionesFormatter.format(dashboard.anulaciones);
    return (
      <Dashboard chartModel={chartModel} anulaciones={anulaciones} cardModel={cardModel} />
    );
  }
}

const mapStateToProps = (state) => {
  const { dashboard, appState } = state;
  return {
    dashboard,
    appState,
  };
};

DashboardContainer.propTypes = {
  dashboard: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(DashboardContainer);
