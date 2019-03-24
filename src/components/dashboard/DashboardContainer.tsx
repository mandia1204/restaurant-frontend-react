import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import DashboardActions from '../../state/actions/DashboardActions';
import Actions from '../../state/actions/AppActions';
import { ChartModelBuilder } from './builders/ChartModelBuilder';
import { CardModelBuilder } from './builders/CardModelBuilder';
import { AnulacionesFormatter } from './formatters/AnulacionesFormatter';
import { Ops } from '../../util/Constants';
import Dashboard from './Dashboard';
import AppState from '../../types/AppState';

interface Props {
  dispatch: Dispatch<any>;
  appState: AppState;
  dashboard: any;
}

class DashboardContainer extends Component<Props, any> {
  chartModelBuilder: any;

  cardModelBuilder: any;

  anulacionesFormatter: any;

  constructor(props: Props) {
    super(props);
    this.chartModelBuilder = ChartModelBuilder();
    this.cardModelBuilder = CardModelBuilder();
    this.anulacionesFormatter = AnulacionesFormatter();
  }

  componentDidMount() {
    const { appState, dispatch } = this.props;
    const filters = { ...appState.dashboardFilters, ops: Ops.all };
    dispatch(DashboardActions.Creators.fetchDashboard(filters));
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

const mapStateToProps = (state: any) => {
  const { dashboard, appState } = state;
  return {
    dashboard,
    appState,
  };
};

export default connect(mapStateToProps)(DashboardContainer);
